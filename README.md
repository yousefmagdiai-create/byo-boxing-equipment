# BYO — Boxing Equipment

Landing pages for **BYO**, a boxing equipment store. Built to the brand guidelines in
`brand_assets/`: `#E53935` / `#FF6A00` on `#0D0D0D`, Bebas Neue for display, Raleway for body.

> Be your own opponent.

## What's here

| Path | What it is |
| --- | --- |
| `index.html` | The original landing page — dark, editorial, product-grid led |
| `new-site/index.html` | The current site — wider layout, spec panel, kit builder, animated hero |
| `brand_assets/` | Logo and brand guidelines |
| `serve.mjs` | Static server for the original page on port 3000 |
| `serve-new.mjs` | Static server for `new-site/` on port 3001 |
| `screenshot.mjs` | Puppeteer capture used for the design review passes |

Both pages are single self-contained HTML files. Styles are inline, Tailwind comes from the
CDN, and fonts come from Google Fonts — there is no build step.

## Running locally

```bash
node serve.mjs      # original page  → http://localhost:3000
node serve-new.mjs  # current site   → http://localhost:3001
```

## Screenshots

```bash
node screenshot.mjs http://localhost:3001 label
```

Saves to `temporary screenshots/screenshot-N-label.png`, auto-incremented. Set `FULL=0` for a
viewport-only shot, or `W` / `H` to change the viewport. Requires Puppeteer to be resolvable —
see the path at the top of `screenshot.mjs`.

## Notes

- The hero figure on the current site is inline SVG: a heavy bag on a chain, swinging as a
  pendulum with impact rings timed to the end of each arc. It respects `prefers-reduced-motion`.
- Product imagery is placeholder (`placehold.co`) and the figures in copy are illustrative.
  Swap both before this goes public.
