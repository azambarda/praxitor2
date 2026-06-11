# Praxitor Website 

Premium brandable domain portfolio — Next.js 14, App Router, plain CSS modules.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  page.js               → Homepage
  domains/page.js       → Full portfolio
  domains/[slug]/       → Individual domain pages
components/
  Nav.jsx               → Sticky navigation
  Footer.jsx            → Footer
data/
  domains.js            → Domain data — edit here to add/remove names
public/
  logo.svg              → Primary wordmark (light backgrounds)
  logo-inv.svg          → Inverted wordmark (dark backgrounds)
```

## Adding a domain

Edit `data/domains.js` and add an object:

```js
{
  slug: 'yourname',          // URL: /domains/yourname
  name: 'Yourname',
  tld: '.com',
  tagline: 'One-line positioning for buyers',
  categories: ['tech', 'saas'],
  description: 'Two to three sentences about the name quality and buyer fit.',
  highlights: [
    'First key point',
    'Second key point',
    'Third key point',
  ],
}
```

## Deployment (Vercel)

1. Push to GitHub
2. Import repo at vercel.com
3. Set custom domain: praxitor.com

The site exports as static HTML (`next.config.mjs` sets `output: 'export'`),
so it deploys to any static host.

## Contact email

Update `contact@praxitor.com` in:
- `components/Footer.jsx`
- `app/domains/[slug]/page.js` (mailto link)
