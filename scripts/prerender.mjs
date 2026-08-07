// Runs after `vite build` (see package.json "postbuild"). Vite ships one
// generic dist/index.html for every route since this is a client-rendered
// SPA — crawlers/bots that don't execute JS (social link-preview bots, some
// SEO tools, and Googlebot's first indexing pass) would otherwise see the
// same title/description/canonical/JSON-LD on every page.
//
// This writes a real dist/<route>/index.html per route with that route's
// <head> baked in, using react-helmet-async's own static-render API so the
// tags carry the same data-rh="true" markers Helmet sets at runtime — when
// the client boots and <SEO> renders for that route, Helmet recognizes these
// as its own and reconciles them instead of appending duplicates.
//
// Keep the tag list below in sync with src/components/seo/SEO.tsx.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SITE_URL, seoConfig } from '../src/lib/seo-data.mjs';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(scriptDir, '..', 'dist');
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

function renderHead(seo) {
  const url = `${SITE_URL}${seo.path}`;
  const image = seo.image || DEFAULT_OG_IMAGE;
  const schemas = seo.structuredData
    ? Array.isArray(seo.structuredData)
      ? seo.structuredData
      : [seo.structuredData]
    : [];

  const children = [
    React.createElement('title', { key: 'title' }, seo.title),
    React.createElement('meta', { key: 'description', name: 'description', content: seo.description }),
    seo.keywords && React.createElement('meta', { key: 'keywords', name: 'keywords', content: seo.keywords }),
    React.createElement('meta', {
      key: 'robots',
      name: 'robots',
      content: seo.noindex ? 'noindex, follow' : 'index, follow',
    }),
    React.createElement('link', { key: 'canonical', rel: 'canonical', href: url }),
    React.createElement('meta', { key: 'og:type', property: 'og:type', content: 'website' }),
    React.createElement('meta', { key: 'og:url', property: 'og:url', content: url }),
    React.createElement('meta', { key: 'og:title', property: 'og:title', content: seo.title }),
    React.createElement('meta', { key: 'og:description', property: 'og:description', content: seo.description }),
    React.createElement('meta', { key: 'og:image', property: 'og:image', content: image }),
    React.createElement('meta', { key: 'og:site_name', property: 'og:site_name', content: 'GetPixage' }),
    React.createElement('meta', { key: 'og:locale', property: 'og:locale', content: 'en_GB' }),
    React.createElement('meta', { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }),
    React.createElement('meta', { key: 'twitter:url', name: 'twitter:url', content: url }),
    React.createElement('meta', { key: 'twitter:title', name: 'twitter:title', content: seo.title }),
    React.createElement('meta', {
      key: 'twitter:description',
      name: 'twitter:description',
      content: seo.description,
    }),
    React.createElement('meta', { key: 'twitter:image', name: 'twitter:image', content: image }),
    ...schemas.map((schema, i) =>
      React.createElement('script', { key: `ld-${i}`, type: 'application/ld+json' }, JSON.stringify(schema))
    ),
  ].filter(Boolean);

  const helmetContext = {};
  ReactDOMServer.renderToStaticMarkup(
    React.createElement(HelmetProvider, { context: helmetContext }, React.createElement(Helmet, null, children))
  );
  const { helmet } = helmetContext;
  return [helmet.title, helmet.meta, helmet.link, helmet.script].map((h) => h.toString()).join('\n    ');
}

const rawTemplate = readFileSync(join(distDir, 'index.html'), 'utf-8');
// Strip the static fallback title/description so prerendered pages don't end
// up with two <title>/<meta name="description"> tags (the injected head is
// the sole source of truth once this script runs).
const template = rawTemplate
  .replace(/\s*<title>[\s\S]*?<\/title>/, '')
  .replace(/\s*<meta name="description"[^>]*>/, '');

let count = 0;
for (const [routePath, seo] of Object.entries(seoConfig)) {
  const head = renderHead(seo);
  const html = template.replace('</head>', `    ${head}\n  </head>`);
  const outPath = routePath === '/' ? join(distDir, 'index.html') : join(distDir, routePath.slice(1), 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  count += 1;
}

console.log(`[prerender] wrote SEO-baked HTML for ${count} routes`);
