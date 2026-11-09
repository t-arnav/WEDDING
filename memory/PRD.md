# PRD — Kartikey & Shriya Wedding Invitation Website

## Original Problem Statement
Create a beautiful, immersive, one-page traditional Indian wedding invitation website that feels like stepping into a grand illustrated Indian wedding celebration. Fully responsive (mobile-first), vibrant and festive — NOT minimalist luxury, NOT dark theme. Single-page scroll with hero mandap scene, invitation panel, functions/ceremonies, save-the-date with live countdown, RSVP with clickable phone + WhatsApp, and footer.

## User Choices (confirmed via ask_human)
- Illustrations: Custom AI-generated Indian wedding illustrations (10 generated: hero mandap, couple, janeu, haldi/sangeet, pheras, reception, Ganesha, save-date frame, pathway, garland band)
- Background music: Yes — implemented as generative Web Audio tanpura drone + santoor plucks with mute/play toggle (no external audio file needed)
- RSVP number: keep placeholder +91-XXXXXXXXXX as-is (user provides real number later)
- RSVP form: No — contact links only

## Wedding Facts (exact, from brief — do not alter)
- Couple: Kartikey & Shriya
- Mantra: Om Shree Ganeshay Namah
- Main: Saturday, 5 December 2026, 7:00 PM — Hotel Harmony Inn, Meerut
- Janeu: 02 December 2026 — Tripathi House, Lucknow
- Haldi/Mehendi/Sangeet: 03 December 2026 — Tripathi House, Lucknow
- Engagement & Wedding: 05 December 2026 — Hotel Harmony Inn, Meerut
- Reception: 07 December 2026 — Indira Gandhi Pratishthan, Lucknow
- RSVP: Arnav — +91-XXXXXXXXXX (placeholder)

## Architecture
- Frontend only (no data storage needed): React 19 + Tailwind + framer-motion + lenis (smooth scrolling) + custom Web Audio ambient music engine
- All illustrations served locally from /public/images (AI-generated, cohesive storybook style)
- Backend untouched (template health endpoint only)
- Fonts: Yatra One (names/display), Rozha One (headings), Eczar (body), Kalam (accent script)
- Palette: peach/sunset/saffron/marigold/rose/blush/cream/ivory/gold/leaf/maroon

## Implemented (2026-11-05)
1. Hero: full-viewport mandap illustration, scroll+mouse parallax, masked line-by-line reveal of names, mantra pill, date/venue pills, scroll indicator, garland strip, wave divider
2. Invitation: cream ornamental panel, Ganesha medallion, full invitation text, corner ornaments
3. Functions & Ceremonies: 4 illustrated cards on dashed-gold timeline, alternating on desktop, stacked on mobile, hover lift + image zoom
4. Save the Date: illustrated arch frame with couple/date/venue + live countdown (days/hours/mins/secs ticking every second), slow editorial marquee band
5. RSVP: warm message panel, Arnav, clickable tel: and wa.me links (placeholder number)
6. Footer: illustrated diya-pathway scene, names, date, closing message, back-to-top
7. Global: floating petal rain (reduced-motion aware), grain texture, top bar with monogram + RSVP shortcut, floating music toggle

## Verification Done
- curl: frontend 200, backend /api 200
- Desktop screenshots (1440x900): all 6 sections verified; fixed card alignment + frame overflow, re-verified
- Mobile screenshots (390x844): all sections verified, no horizontal overflow, countdown ticking confirmed

## Backlog / Next
- P1: Replace placeholder phone/WhatsApp with real number (data/wedding.js: rsvp.telHref, whatsappHref, phoneDisplay)
- P1: Add-to-calendar (Google Calendar / .ics) button in Save the Date
- P2: Real background audio track option (user-supplied mp3 in /public/audio)
- P2: Guest wishes/blessings wall (needs backend + Mongo)
- P2: Venue maps links per function
