import { corsHeaders, jsonResponse } from './_email';

type Env = { RESEND_API_KEY: string; ENQUIRY_TO: string; ENQUIRY_FROM: string };
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const MAX_REQUEST_BYTES = 10 * 1024 * 1024;
const allowedExt = new Set(['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png']);
const requiredFields = [
  'first_name', 'last_name', 'date_of_birth', 'phone', 'email', 'position',
  'blue_ochre_card', 'cpr', 'drivers_licence', 'reliable_vehicle', 'abn',
  'qualified', 'studying', 'years_experience', 'age_groups',
  'why_little_wonders', 'five_words',
];
const regionsList = new Set(['Darwin', 'Toowoomba', 'Brisbane', 'Ipswich', 'Gold Coast', 'Sunshine Coast', 'Other']);

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch] ?? ch));
}
function labelize(key: string): string { return key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); }
function toBase64(bytes: Uint8Array): string {
  // Keep each binary string chunk small to avoid call stack and argument limits.
  const chunks: string[] = [];
  for (let i = 0; i < bytes.length; i += 8192) {
    chunks.push(String.fromCharCode(...bytes.subarray(i, i + 8192)));
  }
  return btoa(chunks.join(''));
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const length = Number(request.headers.get('content-length') || '0');
  if (length > MAX_REQUEST_BYTES) return jsonResponse({ error: 'Application files are too large. Each file must be 4 MB or smaller.' }, 413);

  try {
    const form = await request.formData();
    // Honeypot: silently ignore automated submissions.
    if (String(form.get('website') ?? '').trim()) return jsonResponse({ success: true });

    const details: Record<string, string> = {};
    for (const [key, value] of form.entries()) {
      if (key === 'website' || key === 'cover_letter' || key === 'resume' || key === 'regions') continue;
      if (typeof value !== 'string') return jsonResponse({ error: 'Invalid application data.' }, 400);
      if (value.length > 4000) return jsonResponse({ error: 'Please shorten the information provided.' }, 400);
      details[key] = value.trim();
    }
    for (const field of requiredFields) {
      if (!details[field]) return jsonResponse({ error: `Please provide ${labelize(field)}.` }, 400);
    }
    if (details.consent !== 'yes') return jsonResponse({ error: 'Privacy consent is required.' }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email) || details.email.length > 254) {
      return jsonResponse({ error: 'Please enter a valid email address.' }, 400);
    }
    const dob = new Date(`${details.date_of_birth}T00:00:00Z`);
    if (!Number.isFinite(dob.getTime()) || dob.toISOString().slice(0, 10) !== details.date_of_birth) return jsonResponse({ error: 'Please enter a valid date of birth.' }, 400);
    const today = new Date();
    const youngest = new Date(Date.UTC(today.getUTCFullYear() - 18, today.getUTCMonth(), today.getUTCDate()));
    if (dob > youngest) return jsonResponse({ error: 'Applicants must be at least 18 years of age.' }, 400);
    const regions = form.getAll('regions').map(String);
    if (!regions.length || regions.some(r => !regionsList.has(r))) return jsonResponse({ error: 'Please select at least one valid work region.' }, 400);
    details.regions = regions.join(', ');
    if (!env.RESEND_API_KEY || !env.ENQUIRY_TO || !env.ENQUIRY_FROM) {
      return jsonResponse({ error: 'The application service is not configured. Please email our team instead.' }, 503);
    }

    const attachments: { filename: string; content: string }[] = [];
    for (const key of ['cover_letter', 'resume']) {
      const file = form.get(key);
      if (!(file instanceof File) || file.size === 0) continue;
      const filename = file.name.replace(/[\\/\r\n"<>]/g, '_').slice(0, 125);
      const extension = filename.split('.').pop()?.toLowerCase() ?? '';
      if (!allowedExt.has(extension)) return jsonResponse({ error: 'Upload PDF, DOC, DOCX, JPG or PNG files only.' }, 400);
      if (file.size > MAX_FILE_BYTES) return jsonResponse({ error: 'Each attachment must be 4 MB or smaller.' }, 413);
      const bytes = new Uint8Array(await file.arrayBuffer());
      // Validate basic file signatures for common image/document formats.
      if (extension === 'pdf' && String.fromCharCode(...bytes.subarray(0, 5)) !== '%PDF-') return jsonResponse({ error: 'The uploaded PDF does not appear valid.' }, 400);
      attachments.push({ filename: `${key === 'resume' ? 'Resume' : 'Cover-Letter'}-${filename}`, content: toBase64(bytes) });
    }

    const rows = Object.entries(details).filter(([key]) => key !== 'consent').map(([key, value]) =>
      `<tr><th align="left" style="vertical-align:top;padding:8px;border-bottom:1px solid #ddd;min-width:155px;">${escapeHtml(labelize(key))}</th><td style="padding:8px;border-bottom:1px solid #ddd;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`
    ).join('');
    const body = {
      from: env.ENQUIRY_FROM,
      to: [env.ENQUIRY_TO],
      reply_to: details.email,
      subject: `Wonder Team Careers Application — ${details.first_name} ${details.last_name}`.slice(0, 180),
      html: `<div style="font-family:Arial,sans-serif;color:#243b46;max-width:720px;margin:auto"><h1>Wonder Team Careers Application</h1><p>Submitted via the Little Wonders website. Cover letter and résumé are attached if supplied.</p><table style="border-collapse:collapse;width:100%;font-size:14px">${rows}</table><p style="font-size:12px;color:#666">Applicant consented to recruitment processing. Treat personal details confidentially.</p></div>`,
      ...(attachments.length ? { attachments } : {}),
    };

    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!result.ok) {
      console.error('Careers submission: email provider returned', result.status);
      return jsonResponse({ error: 'We could not send your application right now. Please try again or email our team.' }, 502);
    }
    return jsonResponse({ success: true, message: 'Your application has been sent.' });
  } catch (error) {
    console.error('Careers application error:', error);
    return jsonResponse({ error: 'An unexpected error occurred. Please try again or email our team.' }, 500);
  }
};

export const onRequestOptions = async () => new Response(null, { status: 204, headers: corsHeaders });
