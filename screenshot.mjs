// Usage: node screenshot.mjs http://localhost:3000 [label]
// Saves to ./temporary screenshots/screenshot-N[-label].png (auto-incremented).
import { mkdirSync, readdirSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';

const PPTR_DIR = 'C:/Users/ahmed/AppData/Local/Temp/claude/c--Users-ahmed-Downloads-Website-Building-YT/3be698e0-4554-41ec-a5eb-5825059ce275/scratchpad/pptr';
const require = createRequire(join(PPTR_DIR, 'package.json'));
const puppeteer = require('puppeteer');

const url = process.argv[2] ?? 'http://localhost:3000';
const label = process.argv[3];
const width = Number(process.env.W ?? 1440);
const height = Number(process.env.H ?? 900);

const outDir = join(process.cwd(), 'temporary screenshots');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const used = readdirSync(outDir)
  .map((f) => Number(/^screenshot-(\d+)/.exec(f)?.[1]))
  .filter(Number.isFinite);
const n = (used.length ? Math.max(...used) : 0) + 1;
const out = join(outDir, `screenshot-${n}${label ? `-${label}` : ''}.png`);

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width, height, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await page.evaluate(() => document.fonts.ready);

// Scroll through the page so scroll-triggered content renders, then return to top.
await page.evaluate(async () => {
  // scroll-smooth would animate each hop and leave the loop far behind.
  document.documentElement.style.scrollBehavior = 'auto';
  const step = window.innerHeight * 0.8;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
});

await new Promise((r) => setTimeout(r, 1400));
await page.screenshot({ path: out, fullPage: process.env.FULL !== '0' });
await browser.close();

console.log(out);
