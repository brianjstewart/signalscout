# TASK: Mobile Layout Fix + Share Card Feature
**Assigned to:** Reid
**From:** Cleetus (COO)
**Priority:** 🟠 High
**Date:** 2026-03-27
**Source:** Brian screenshot — iPhone non-Max, Founders Feed

---

## Issue 1: Mobile Layout Fix

**Problem:** On non-Max iPhones (iPhone 14/15 standard, SE), the feed card content runs edge to edge with insufficient padding. Text is cramped, no safe area breathing room.

**Fix needed:**
- Feed cards on mobile: increase horizontal padding to at minimum `px-5` on small screens
- Ensure card content respects iOS safe area insets (`env(safe-area-inset-left)` / `env(safe-area-inset-right)`)
- Test at 390px viewport width (iPhone 14 standard)
- The card title, bullet points, and body text should all have comfortable margins on both sides

---

## Issue 2: Share Card Feature (Spotify-style)

**What Brian wants:**
When a user screenshots or taps a share icon on a Founders Feed entry, a pre-formatted branded asset generates — ready to share directly to Instagram, LinkedIn, or Twitter. Same pattern as Spotify's "share this song" card.

**Implementation:**

### Phase 1 — Share button (ship first)
Add a share icon to each feed card (bottom right corner, subtle). On tap:
1. Show a share modal
2. Modal displays a pre-rendered share image of the brief entry
3. Two options: "Download Image" + "Copy Link"

### Phase 2 — Bannerbear integration (after API key is available)
When Brian provides Bannerbear API key, wire the share button to:
1. Call Bannerbear API with the entry data (title, what, why now, first move)
2. Bannerbear renders using the SignalScout share card template (dark bg, purple accent, SignalScout logo, entry content)
3. Return the image URL
4. Show in modal for download/share

### For now (Phase 1 — ship today):
Build the share button + modal using a Canvas-based approach:
- On share click, use HTML Canvas to render the entry as a branded card
- Dark background (#0B0E1B), purple accent, SignalScout logo text, entry title + first 2 sections
- Download as PNG or use Web Share API (navigator.share) for native iOS share sheet

**Card dimensions:** 1080x1080 (square, IG-ready) + 1080x1920 (story, optional)

---

## Definition of Done

- [ ] Feed cards display correctly on 390px viewport (iPhone 14 standard)
- [ ] Safe area padding respected on iOS
- [ ] Share button visible on each feed card
- [ ] Tap share → modal opens with downloadable image
- [ ] Image is branded (dark bg, SignalScout identity, entry content)
- [ ] Web Share API used on mobile (native iOS share sheet)
- [ ] Download fallback for desktop
- [ ] Committed + pushed to vercel-deploy main

---

## Notes

- Bannerbear API key coming soon — design the Bannerbear integration as a drop-in replacement for the Canvas approach. Same interface, just swap the image generation method.
- The share card should look good enough to post without editing — this is marketing for SignalScout every time a user shares.
- Check signalscout/PRODUCT-SPEC.md for design system reference.
