# ANEEB CHEMICALS PVT. LTD. — Corporate Website

A professional, fully responsive website for ANEEB CHEMICALS PVT. LTD., a manufacturer and supplier of synthetic rubber adhesives, synthetic resin adhesives, waterproofing compounds, and construction chemicals based in Ghaziabad, India.

## 🎨 Design Theme

Chemical-industry inspired visual identity:
- **Deep navy (#0b1c2e)** — industrial authority and trust
- **Electric teal (#00c8b4)** — chemical precision, freshness, and innovation
- Molecular/hexagon motifs, animated SVG molecule graphics, chemistry-inspired iconography
- Smooth, professional transitions throughout (scroll reveals, hover states, crossfade hero slider)

## 📁 Folder Structure

```
aneeb-chemicals/
├── index.html                 → Homepage
├── README.md                  → This file
│
├── css/
│   ├── variables.css          → Design tokens (colors, spacing, typography, shadows)
│   ├── reset.css               → CSS reset & base element styles
│   ├── layout.css              → Container, buttons, topbar, section headers
│   ├── navbar.css              → Sticky navigation, dropdown, mobile hamburger
│   ├── hero.css                → Hero slider, overlay, scroll cue
│   ├── sections.css            → Stats strip, about strip, why-us, process, CTA banner
│   ├── products.css            → Category cards, product cards, products page grid
│   ├── animations.css          → Scroll-reveal animation classes, back-to-top, forms
│   ├── footer.css              → Footer layout & styling
│   └── responsive.css          → All media queries (tablet, mobile, small mobile)
│
├── js/
│   ├── utils.js                → Shared helpers (throttle, debounce, qs, qsa, on)
│   ├── navbar.js                → Sticky navbar, mobile menu toggle, active link logic
│   ├── hero-slider.js          → Hero crossfade slider + animated hex-grid canvas background
│   ├── animations.js           → IntersectionObserver-based scroll reveal engine
│   ├── counter.js              → Animated number counters (stats section)
│   └── main.js                 → Back-to-top button, smooth anchor scroll, misc
│
├── pages/
│   ├── about.html              → Company story, timeline, values, key contact
│   ├── products.html           → All 5 product categories with full product listings
│   ├── clients.html            → Industries served, testimonials
│   ├── contact.html            → Contact form, info cards, embedded map
│   ├── privacy.html            → Privacy Policy
│   └── terms.html              → Terms & Conditions
│
└── images/                     → (Reserved for locally-hosted product/brand images)
```

## ✨ Key Improvements Over Original Site

1. **Modern visual identity** — chemical-industry color palette (navy + teal) replacing generic template styling, with a custom SVG molecule graphic and hexagon-pattern animated canvas background.
2. **Smooth, professional transitions** — scroll-triggered reveal animations (IntersectionObserver), animated stat counters, crossfade hero slider, spring-eased hover states on cards/buttons, floating-label form inputs.
3. **Proper information architecture** — split into Home / About / Products / Clients / Contact rather than a single long scroll, each with deep-linkable product category anchors.
4. **Complete product catalogue** — all 5 categories (Plastering, Waterproofing, Construction Chemicals, Tile Fixing, Laminated Glass) fully represented with descriptions, distinct from the original's sparse listings.
5. **Functional contact experience** — structured inquiry form with validation, embedded map, multiple contact touch-points (manufacturing + registered address).
6. **Maintainable, modular codebase** — every concern (variables, reset, layout, navbar, hero, sections, products, animations, footer, responsive) lives in its own CSS file; JS is split by responsibility, making it easy to debug or extend any single feature without touching unrelated code.
7. **Fully responsive** — dedicated breakpoints for tablet (1024px), mobile (768px), and small mobile (480px), including a slide-in mobile navigation drawer.
8. **Accessibility & performance touches** — `prefers-reduced-motion` support, lazy-loaded images with fallback, semantic HTML, focus-visible states, alt text throughout.

## 🚀 How to Run

This is a static site — no build step required.

1. Open `index.html` directly in a browser, **or**
2. Serve via a local server for best results (so relative paths & iframes work correctly):
   ```bash
   # Python
   python3 -m http.server 8000

   # Node (http-server)
   npx http-server .
   ```
3. Visit `http://localhost:8000`

## 🔧 How to Customize

| What you want to change            | File to edit                          |
|-------------------------------------|----------------------------------------|
| Brand colors                        | `css/variables.css`                   |
| Navbar links/structure              | `index.html` + each page's `<nav>`    |
| Hero slider images/text             | `index.html` → `.hero__slides`        |
| Add/edit a product                  | `pages/products.html`                 |
| Contact details (phone, address)    | Search & replace across all HTML files |
| Animation timing/behavior           | `js/animations.js`, `css/animations.css` |
| Add a new page                      | Copy an existing file in `pages/`, update nav links on every page |

## 📌 Notes for Developers

- All product images currently point to placeholder/sample URLs — replace `src` attributes in `pages/products.html` and `index.html` with your own hosted images in `/images/`.
- The contact form (`pages/contact.html`) currently shows a client-side success message only. Connect `handleSubmit()` in the inline `<script>` to a real backend endpoint (e.g., Formspree, custom API) to receive submissions.
- The Google Maps embed in `contact.html` uses a generic query string — replace with your exact Place ID/coordinates for precision.
- Font Awesome and Google Fonts are loaded via CDN; for offline/air-gapped deployments, self-host these assets.
