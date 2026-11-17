# Little Wonders — Wedding, Private Events & Defence update (16 November 2026)

Use the **CHANGED-FILES** ZIP on GitHub's `pastel-preview` branch. Extract it first and drag the files and folders inside the ZIP to the repository root (where `src/` and `public/` exist); do not upload the ZIP itself.

## Included
- Wedding Childcare: requested five-step journey, activity list replacement and Wedding Guide download.
- Private & Corporate Care renamed to **Private & Corporate Events** in navigation, homepage, Care Options, footer and FAQ. Same `/functions` URL; page-specific purple colours and revised wording.
- Defence Care: four detailed service sections with circular images, 2026–2027 benefits, Open/Closed Care explanations, ADF Guide download.
- 10-page Wedding Guide and 11-page ADF Functions & Support Guide PDFs copied exactly from the client's attachments.

## Deliberately untouched
Existing contact, parent/event registration, Resend, Cloudflare Functions, Supabase and API handler files; homepage structure and existing header behaviour.

## Pending
The client intends to provide **four specific Defence section photographs**. Current circular images are temporary photographs already in the source project; replace after receiving the real photos.

## Before publishing
Open and test the Cloudflare `pastel-preview` deployment: `/wedding-childcare`, `/functions`, `/defence-care`; confirm both guide downloads and the existing forms. The two supplied guides retain older figures/scheduling text that may differ from the new website copy. Do not modify them without client sign-off.

This source update was syntax checked; a complete Vite build/browser test was not possible here because required npm dependencies were unavailable. If GitHub contains newer edits to the same source files, compare before overwriting.
