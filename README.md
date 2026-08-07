# BYO — Boxing Equipment

Landing page for **BYO**, a boxing equipment store. Built to the brand guidelines in
`brand_assets/`: `#E53935` / `#FF6A00` on `#0D0D0D`, Bebas Neue for display, Raleway for body.

> Be your own opponent.

## What's here

| Path | What it is |
| --- | --- |
| `index.html` | **The site.** Wide dark layout, spec panel, kit builder, animated hero |
| `brand_assets/` | Logo and brand guidelines |
| `old-site/index.html` | The earlier landing page, kept for reference |
| `serve.mjs` | Static server for the site on port 3000 |
| `serve-old.mjs` | Static server for `old-site/` on port 3001 |
| `screenshot.mjs` | Puppeteer capture used for the design review passes |

The page is a single self-contained HTML file. Styles are inline, Tailwind comes from the
CDN, and fonts come from Google Fonts — there is no build step.

## Running locally

```bash
node serve.mjs      # the site      → http://localhost:3000
node serve-old.mjs  # previous page → http://localhost:3001
```

## Screenshots

```bash
node screenshot.mjs http://localhost:3000 label
```

Saves to `temporary screenshots/screenshot-N-label.png`, auto-incremented. Set `FULL=0` for a
viewport-only shot, or `W` / `H` to change the viewport. Requires Puppeteer to be resolvable —
see the path at the top of `screenshot.mjs`.

## Notes

- The hero figure is inline SVG: a heavy bag on a chain, swinging as a pendulum with impact
  rings timed to the end of each arc. It respects `prefers-reduced-motion`.
- Product imagery is placeholder (`placehold.co`) and the figures in copy are illustrative.
  Swap both before this goes public.
