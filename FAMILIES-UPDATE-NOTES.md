# Families tab update — November 2026

## Included
- Main navigation now shows **Families** instead of **Group Bookings** and opens `/families`.
- `/group-bookings` redirects to `/families` so existing bookmarks still work.
- Existing **Care Options** group-bookings link opens the new Families page.
- Footer link is updated to Families.
- New Families page uses circular photos and the supplied copy for Babysitting, Household Management, Defence Family Support, Group Babysitting Bookings, Weddings + Functions and Private Functions.
- Added five booking steps; links to the existing Parent Registration page and Our Wonder Team page.
- Added a downloadable, **unaltered**, 24-page `Care Guide 2026/27` PDF.
- Added a review carousel with previous/next arrow buttons, based on the reviews in the client's message.
- The Families page uses blue accents only, consistent with the wedding/general palette.

## Preserved / excluded
- No changes to the homepage, main layout, existing forms, Resend, Cloudflare Functions, Supabase, registration data, or shared CSS.
- The existing `src/pages/GroupBookings.tsx` remains in the source for archive/reference but isn't routed; the old URL redirects to Families.

## Before publishing
- Review the supplied PDF with the client. Its contents include older policies, services and dates, including a **2014** launch statement on page 23 that differs from the **September 2013** date on the website. This update intentionally does not edit the client's PDF.
- The supplied review copy has not been independently verified; get client approval for public display.
- Check the Families page on desktop/mobile and test the PDF download and review arrows in your Cloudflare preview branch.
- Because npm packages were not available offline in the authoring environment, a complete runtime build still needs to run on Cloudflare.

## GitHub upload
Extract the changed-files ZIP and upload the contents (the `src` and `public` folders, and these notes) into the root of `pastel-preview`. Preserve the internal paths. Do not upload the ZIP as a single file. Commit to `pastel-preview`, not `main`.
