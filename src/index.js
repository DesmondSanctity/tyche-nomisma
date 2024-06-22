import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';
import manifest from '__STATIC_CONTENT_MANIFEST';
import { homeHTML } from './views/home';
import { formHTML } from './views/form';
import { chartHTML } from './views/chart';
import { fundamentalAnalysis } from './functions';

import { extract, install } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';

install({
 presets: [
  presetTailwind(),
  {
   theme: {
    fontFamily: {
     sans: ['Inter', 'sans-serif'],
     serif: ['Merriweather', 'serif'],
    },
   },
  },
 ],
});

async function ssrTwind(body) {
 const { html, css } = extract((await body).toString());
 return html.replace('</head>', `<style data-twind>${css}</style><head>`);
}

const app = new Hono();

app.get('/', (c) => {
 return c.html(ssrTwind(homeHTML));
});

app.get('/start', (c) => {
 return c.html(ssrTwind(formHTML));
});

app.get('/chart', (c) => {
 return c.html(ssrTwind(chartHTML));
});

app.post('/schedule', async (c) => {
 const setSchedule = await fundamentalAnalysis(c);
 return c.json({ setSchedule });
});

app.get('/*', serveStatic({ root: './', manifest }));

app.post('/submit', async (c) => {
 const body = await c.req.parseBody();
 const { currencyPair, interval, phoneNumber } = body;
 // Handle the data (e.g., save to database, send to an API, etc.)
 return c.text(
  `Currency Pair: ${currencyPair}, Interval: ${interval}, Phone Number: ${phoneNumber}`
 );
});

export default app;
