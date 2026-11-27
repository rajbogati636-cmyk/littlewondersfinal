# Little Wonders — Client website updates, 27 November 2026

Base used: LittleWonders-Website-Updated-Nov23-2026.zip (includes the 23 November changes).
New source: five `.eml` messages received from Little Wonders on 26 November 2026.

## Implemented

1. **Homepage Private & Corporate Events:** Replaced the low-resolution portrait image with the client-supplied outdoor tree-swing image from `IMG_1683.JPG`, saved as `public/assets/home-events-swing-2026.webp` (1800 × 1200). The original was sharp enough for normal website display, although the final crop depends on screen width.
2. **Homepage Wedding Childcare:** Replaced the low-resolution dancing children photo with the client-supplied group image, saved as `public/assets/home-wedding-group-2026.webp` (1750 × 1583). The supplied `IMG_1905.jpg` was byte-identical to the existing full-resolution `public/assets/wedding-guests-outdoors.jpg` (no need to guess another crop).
3. **Mobile navigation:** Kept the existing Enquire, Event Registration, and Parent Registration links at the top and made them clearer, readable, and responsive on phones. Added a compact, horizontally scrollable service-link ribbon beneath the phone header for Weddings, Events, Families, Defence, Venues, and Join Our Team. Desktop navigation is unchanged, apart from making Join Our Wonder Team available in the About menu.
4. **Join Our Wonder Team / Careers:** Rebuilt the careers application form using the field list from the original site's `/careers/` page, including contact details, date of birth, role, Blue Card/Ochre Card, First Aid, CPR, transport, ABN, qualifications, study, experience, five-word description, motivations, regions, optional cover letter and résumé. Added required consent and form validation, and linked the application from the Our Wonder Team page and About navigation.

### Important about the application form

- The new form posts to `/api/careers`, a Cloudflare Pages Function following the site's existing email integration. It uses the **same** environment variables already needed by existing forms: `RESEND_API_KEY`, `ENQUIRY_TO`, `ENQUIRY_FROM`.
- If deploying to GitHub alone, the website is not hosted by GitHub Pages unless separately configured. The form needs a Cloudflare Pages deployment (or equivalent backend support) with the above variables. On a static-only hosting setup, the form cannot deliver submissions.
- Optional résumé/cover letter attachments support PDF, DOC, DOCX, JPG and PNG at up to **4 MB each**. The original website allowed very large files; the new cap reduces email and upload risk. Never upload ID cards or safety certificates through this form.
- Applicant details are emailed to the configured Little Wonders inbox through Resend. There is no new database or admin panel.
- The old form was found on the **existing public website**, not accessed in the WordPress admin/back end: https://littlewondersaustralia.com/careers/
- **Before launch:** confirm the email provider and sender domain credentials, submit a small test application, check it reaches the intended inbox with attachment, and check the privacy policy matches the collection and handling of applicant data.

## Planning email (not implemented)

The 26 November message titled `2027` is a question about future hosting, support, self-service blog publishing, guide replacements and photo updates. No CMS or hosting-system migration was attempted: these should be scoped and agreed separately.

## Verification performed

- All five changed/new TSX and TypeScript source files passed TypeScript isolated-transpilation syntax diagnostics.
- Six backend integration tests passed using stub email delivery (successful multipart submission and attachment, region/age/consent/extension rejection, HTML escaping).
- Both delivery ZIP files were checked for integrity and for their intended changed file list.
- **Production build not verified** in this environment: npm dependencies were not available to install from the registry. Verify the production build using `npm ci && npm run build` in the deployment environment or CI.

## Using the ZIP files

- **Changes-only ZIP**: extract in the *root of your existing GitHub repository*, keeping the internal folder paths. Commit/push on a test branch. It contains only modified/new files, not a complete site.
- **Full-site ZIP**: contains the complete updated project under `littlewondersfinal-main/`. Upload **the contents of that folder** into your repository root, not the outer `littlewondersfinal-main` wrapper, unless the repository uses that wrapper already.
- Never overwrite your branch from an older ZIP if additional updates were committed after 23 November 2026. Merge/diff first.
