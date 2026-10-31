# J&L Holdings website

Plain static HTML/CSS with a little JS. No build step. Upload the contents of this folder as-is.

- `index.html` – holding company home (portfolio, venture details, approach, about, contact)
- `professional-services.html` – J&L Professional Services / Local Visibility Fix Sprint offer
- `privacy.html`, `refund.html` – policies (marked DRAFT, review before publishing)
- `404.html` – not-found page (uses root-absolute paths; works when the site is at the domain root)

## Before / after launch
- Buy button on professional-services.html uses the live Stripe payment link https://buy.stripe.com/8x29AT8Yu6Wb66t57PeZ200.
- Contact form uses `mailto:` (opens the visitor's email app). See the comment above the form to switch to Formspree or Netlify Forms.
- Optional once a domain is set: add `<link rel="canonical">`, `og:url`, `og:image`, and a sitemap.xml.
