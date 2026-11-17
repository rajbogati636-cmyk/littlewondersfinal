# Little Wonders — 16 November corrections and client handover notes

**Source used:** `LittleWonders-Weddings-Events-ADF-FULL-WEBSITE.zip` (latest supplied full project). All 16 Nov client changes in that source are preserved. This is an editable React/Vite project, **not** a WordPress theme or CMS.

## Implemented in this package
- Removed floating circular hero stamp and decorative animated round shapes from the homepage and general page headers. Retained circular *photography* chosen by Nicole.
- Replaced the visually damaged header/footer logo with the original branded symbol extracted from the client-supplied Wedding Care Guide and a clean text wordmark. **Final logo appearance (including favicon and preview metadata) still requires Nicole's visual approval**; an official original vector logo is preferable.
- Wedding-led hero headline (layout unchanged); replaced unrelated Instagram stock images with actual event photographs extracted from Nicole's Wedding Care Guide. Instagram feed configuration is prepared but **not live until Nicole provides an authorised embed URL**.
- Restored a substantial 'Customised Wedding Care Packages' inclusion list to Wedding Childcare, without unapproved legacy discounts, dates or pricing. Retained the 5-step Wedding Childcare Journey, the activity-list replacement and the exact Wedding Guide PDF.
- Replaced Private & Corporate Events placeholder photos with actual event photos from Nicole's supplied Functions Guide, restored additional Small Business benefits and a link to Expos & Community Days. Purple page theme retained.
- Restored the 12 main Care Options categories from the original website (Nanny, Babysitting, Mother’s Helper, On-Call Labour Nanny, Overnight & Temporary Live-in, Defence, Wedding, Vacation, Private Functions, Group, Excursions, Additional Needs) and displayed them with circular photography to match the Families/Defence style. Existing original-specific photos unavailable as separate files use documented assets from client-provided guides and project; final photo approval is still needed. Kept Families journey and testimonial carousel.
- Replaced unverified stock-like Wonder Team image with documented Little Wonders event photography and fixed object-fit cropping.
- Added functional Careers and Expos & Community Days information pages, plus legacy URL 301 redirects. The former website's full Careers application upload form is **not** yet rebuilt; applications currently use an email enquiry link.
- Corrected the displayed email link on Contact to admin@littlewondersaustralia.com; **form submit logic and backend are not changed**.
- Removed an unusable non-linked 'Terms & Conditions' footer item, pending approved legal content.
- Preserved 2026–2027 Defence benefits, four circular service descriptions, available imagery and ADF Guide unchanged; final 4 bespoke photos remain pending from Nicole.
- All existing contact, parent/event registration form logic, Cloudflare Function handlers, Resend setup, and Supabase files are unchanged except the Contact page's visible mailto label.

## Still awaiting Nicole or final live testing (NOT completed)
1. An *actual automatically updating Instagram feed* needs an approved embed-provider URL/account authorization. The current gallery is genuine but static; **do not describe it as live**.
2. The original Journal's posts/media cannot be reliably restored from the available archive. Obtain a verified WordPress export/approved blog backup, screen for spam, migrate and test; a holding page remains.
3. Four final Defence Care circular photos have not been supplied. Existing photographs are temporary.
4. Original brand logo is only reproduced as client-supplied graphic symbol with text; seek original official SVG/transparent logo for exact final reproduction.
5. Careers original form with application uploads is not rebuilt; the restored page currently provides email application instructions.
6. Connection Call still routes to contact/enquiry (not a date/time scheduler). Supply an approved scheduling link for direct bookings if needed.
7. Latest GitHub `main` branch and the preview URL were unreachable with the available tools; compare files to `main` before overwriting changes not included in source ZIP.
8. End-to-end live form submission, Resend receipt, redirect behaviour, PDF downloads, accessibility and browser/mobile appearance **require staging checks** before public launch.
9. Official supplied PDFs contain older policy/rate/timing text; they are preserved exactly as provided. Nicole should approve them for publication against the 2026–27 rates/terms.
10. Client-editable administration / CMS / WordPress-style dashboard and blog publishing are separate work and are **not present** in this React source.

## Deploy via GitHub web interface
1. Download the **changed-files** ZIP to update an existing repository (the full ZIP is also provided as a snapshot).
2. Extract it locally; upload its contents (maintaining the `src/`, `public/` and `functions/` paths) to a GitHub branch created from `main` to compare/preview.
3. Cloudflare Pages should build with **Vite**, `npm run build`, output directory `dist`, root directory blank. Preserve Cloudflare Functions and existing Resend secrets.
4. Test every key page on staging, including forms, before merging into `main` or changing the live custom domain.

**Do not paste an archive file itself into GitHub** expecting Cloudflare to extract it automatically. Upload the files inside it.
