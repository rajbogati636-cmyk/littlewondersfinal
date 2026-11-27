import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Heart, Mail, ShieldCheck, Users } from 'lucide-react';

const minimum = [
  'Minimum age 18, with a genuine commitment to warm and professional childcare',
  'Blue Card (QLD) or Ochre Card (NT) eligibility as applicable',
  'Childcare First Aid, CPR and relevant safety training',
  "Driver's licence, reliable roadworthy vehicle and role-specific checks",
  'Strong communication, punctuality and respect for family privacy',
];
const opportunities = [
  { icon: Heart, title: 'Babysitting & Family Care', desc: 'Provide thoughtful in-home, accommodation-based and recurring care.' },
  { icon: Users, title: 'Weddings & Events', desc: 'Bring creativity and care to wedding celebrations and events.' },
  { icon: ShieldCheck, title: 'Defence Family Support', desc: 'Help Defence and Emergency Services families access flexible support.' },
];
const regions = ['Darwin', 'Toowoomba', 'Brisbane', 'Ipswich', 'Gold Coast', 'Sunshine Coast', 'Other'];
type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

function SelectField({ name, label, required = false }: { name: string; label: string; required?: boolean }) {
  return (
    <div className="career-field">
      <label htmlFor={name}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      <select id={name} name={name} required={required} defaultValue="">
        <option value="" disabled>Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="In progress">In progress</option>
        <option value="Not sure">Not sure</option>
      </select>
    </div>
  );
}

export default function Careers() {
  const [state, setState] = useState<SubmitState>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!form.querySelector('input[name="regions"]:checked')) {
      setError('Please choose at least one region where you would like to work.');
      return;
    }
    const data = new FormData(form);
    const cover = data.get('cover_letter');
    const resume = data.get('resume');
    for (const file of [cover, resume]) {
      if (file instanceof File && file.size > 4 * 1024 * 1024) {
        setError('Each file must be 4 MB or smaller. Please choose a smaller file.');
        return;
      }
    }
    setState('submitting');
    setError('');
    try {
      const response = await fetch('/api/careers', { method: 'POST', body: data });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) throw new Error(result.error || 'Your application could not be sent.');
      setState('success');
      form.reset();
    } catch (caught) {
      setState('error');
      setError(caught instanceof Error ? caught.message : 'Your application could not be sent.');
    }
  }

  return <main className="lw-careers-page">
    <header className="page-hero"><p className="eyebrow">Little Wonders</p><h1>Join Our Wonder Team</h1><p>Thoughtful people. Warm hearts. Professional care.</p></header>
    <section className="lw-editorial-container">
      <div className="lw-editorial-intro"><p className="eyebrow">Careers at Little Wonders</p><h2>Come create little moments that matter.</h2><p>We're always interested in passionate carers who share our commitment to professional childcare and meaningful family connections.</p><p>Our work includes family care, wedding and event childcare and support for Defence families. Opportunities depend on location and availability.</p><a className="button" href="#application">Apply online <ArrowRight size={16} /></a></div>
      <div className="lw-editorial-cards">{opportunities.map(o => <article key={o.title}><o.icon size={28} strokeWidth={1.5}/><h3>{o.title}</h3><p>{o.desc}</p></article>)}</div>
      <section className="lw-editorial-panel"><h2>What we look for</h2><ul>{minimum.map(m => <li key={m}>{m}</li>)}</ul><p>Requirements, checks and insurance arrangements are confirmed according to your role and location. We verify qualifications and references during recruitment.</p></section>

      <section className="career-application-section" id="application" aria-labelledby="career-application-title">
        <div className="career-form-intro"><p className="eyebrow">We'd love to hear from you</p><h2 id="career-application-title">Careers Application Form</h2><p>Use the form below to express your interest in joining Little Wonders. Fields marked * are required. This form is based on the previous Little Wonders careers application.</p></div>
        {state === 'success' ? (
          <div className="career-success" role="status"><CheckCircle2 size={42} /><h3>Thank you for applying!</h3><p>Your application has been submitted to Little Wonders. Our team will review your details and contact you if there is a suitable opportunity.</p><button type="button" className="button" onClick={() => setState('idle')}>Submit another application</button></div>
        ) : (
          <form className="career-application-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <fieldset className="career-form-section"><legend>About you</legend>
              <div className="career-form-grid">
                <div className="career-field"><label htmlFor="first_name">First name *</label><input id="first_name" name="first_name" autoComplete="given-name" required maxLength={100}/></div>
                <div className="career-field"><label htmlFor="last_name">Last name *</label><input id="last_name" name="last_name" autoComplete="family-name" required maxLength={100}/></div>
                <div className="career-field"><label htmlFor="date_of_birth">Date of birth (minimum age 18) *</label><input id="date_of_birth" name="date_of_birth" type="date" required max={new Date().toISOString().slice(0,10)} /></div>
                <div className="career-field"><label htmlFor="phone">Phone number *</label><input id="phone" name="phone" type="tel" autoComplete="tel" required maxLength={40}/></div>
                <div className="career-field career-full"><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254}/></div>
                <div className="career-field career-full"><label htmlFor="position">What position are you applying for? *</label><input id="position" name="position" placeholder="For example, babysitter, wedding care or Defence carer" required maxLength={200}/></div>
              </div>
            </fieldset>
            <fieldset className="career-form-section"><legend>Checks, qualifications &amp; transport</legend>
              <div className="career-form-grid">
                <SelectField name="blue_ochre_card" label="Current Blue Card / Ochre Card?" required />
                <SelectField name="first_aid" label="Current First Aid certificate?" />
                <SelectField name="cpr" label="Current CPR certificate?" required />
                <SelectField name="drivers_licence" label="Driver's licence?" required />
                <SelectField name="reliable_vehicle" label="Own reliable roadworthy vehicle?" required />
                <SelectField name="abn" label="Australian Business Number (ABN)?" required />
                <SelectField name="qualified" label="Certificate III or higher in childcare, education or a related field?" required />
                <div className="career-field"><label htmlFor="qualifications">If yes, list your qualifications</label><textarea id="qualifications" name="qualifications" rows={3} maxLength={1500}/></div>
                <SelectField name="studying" label="Seeking to study Certificate III or higher?" required />
                <div className="career-field"><label htmlFor="future_study">If yes, what would you like to study?</label><textarea id="future_study" name="future_study" rows={3} maxLength={1500}/></div>
              </div>
            </fieldset>
            <fieldset className="career-form-section"><legend>Experience &amp; motivation</legend>
              <div className="career-form-grid">
                <div className="career-field"><label htmlFor="years_experience">Years of experience caring for children *</label><input id="years_experience" name="years_experience" type="number" min="0" max="70" step="0.5" required /></div>
                <div className="career-field"><label htmlFor="age_groups">Ages of children you have experience with *</label><input id="age_groups" name="age_groups" placeholder="For example, infants, 2–5, school-age" required maxLength={500}/></div>
                <div className="career-field career-full"><label htmlFor="why_little_wonders">Why do you want to work for Little Wonders? *</label><textarea id="why_little_wonders" name="why_little_wonders" rows={4} required maxLength={3500}/></div>
                <div className="career-field career-full"><label htmlFor="five_words">Five words that describe you as a babysitter *</label><textarea id="five_words" name="five_words" rows={2} required maxLength={500}/></div>
                <div className="career-field career-full"><label htmlFor="recognition">How do you like to be rewarded for your work and contributions?</label><textarea id="recognition" name="recognition" rows={3} maxLength={2500}/></div>
              </div>
            </fieldset>
            <fieldset className="career-form-section"><legend>Preferred work regions *</legend>
              <p>Select all the locations where you would be interested in working.</p>
              <div className="career-regions">{regions.map(region => <label key={region}><input type="checkbox" name="regions" value={region}/><span>{region}</span></label>)}</div>
              <div className="career-field"><label htmlFor="other_regions">Other regions (if selected)</label><input id="other_regions" name="other_regions" maxLength={300}/></div>
            </fieldset>
            <fieldset className="career-form-section"><legend>Your cover letter &amp; résumé</legend>
              <p>You may upload a cover letter and résumé (PDF, DOC, DOCX, JPG or PNG, up to 4 MB each). Do not upload identity documents, Blue Cards or other sensitive certificates here.</p>
              <div className="career-form-grid">
                <div className="career-field"><label htmlFor="cover_letter">Cover letter</label><input id="cover_letter" name="cover_letter" type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" /></div>
                <div className="career-field"><label htmlFor="resume">Résumé / CV</label><input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" /></div>
              </div>
            </fieldset>
            <div className="career-consent"><label><input type="checkbox" name="consent" value="yes" required /> <span>I consent to Little Wonders receiving and reviewing my application information for recruitment purposes. I have read the <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</Link>. *</span></label></div>
            <div className="career-honeypot" aria-hidden="true"><label htmlFor="career_site">Leave this field blank</label><input id="career_site" name="website" tabIndex={-1} autoComplete="off" /></div>
            {error && <p className="career-error" role="alert">{error} You can also email <a href="mailto:admin@littlewondersaustralia.com">admin@littlewondersaustralia.com</a>.</p>}
            <div className="career-form-actions"><button className="button" type="submit" disabled={state === 'submitting'}>{state === 'submitting' ? 'Submitting application…' : 'Submit Application'} <ArrowRight size={17}/></button><p>Applications are delivered to the Little Wonders team. We will contact suitable candidates about next steps.</p></div>
          </form>
        )}
      </section>
      <section className="lw-editorial-cta"><h2>Have a question?</h2><p>Contact us if you'd like to ask about recruitment requirements or upcoming opportunities.</p><a className="button outline" href="mailto:admin@littlewondersaustralia.com?subject=Wonder%20Team%20Career%20Enquiry"><Mail size={17}/> Email Our Team</a><Link className="button outline" to="/wonder-team">Meet Our Wonder Team <ArrowRight size={16}/></Link></section>
    </section>
  </main>;
}
