# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **Inventor's Den** — a sustainability-focused startup. Built with plain HTML, CSS, and vanilla JS (no frameworks, no build tools, no Tailwind). All pages were implemented from Figma designs using the Figma MCP tool.

## Development

No build step required. Open any `.html` file in a browser or use a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Architecture

- **Single shared stylesheet** (`css/style.css`) — all pages styled from one file, organized by page-specific sections with comment headers
- **No templating** — header, footer, and nav are duplicated across all 7 HTML files. When modifying shared elements (nav links, footer), update every HTML file
- **No build/bundling** — assets referenced directly, Google Fonts loaded via `<link>` tags

### Pages

| File | Purpose |
|------|---------|
| `index.html` | Homepage (hero, marquee, products preview, about preview, workshops) |
| `about.html` | About page (story, Startup India recognized, mission/vision, leadership) |
| `products.html` | Products page (4 alternating horizontal product cards) |
| `contact.html` | Contact page (info + enquiry form) |
| `blogs.html` | Blog listing (2 article cards) |
| `blog-real-time-water-quality.html` | Blog detail article |
| `blog-sustainable-3d-printing.html` | Blog detail article |

### CSS Organization (`css/style.css`)

The stylesheet follows a strict section order with `/* === Section Name === */` comment delimiters:

1. Reset & Base (CSS variables, fonts)
2. Buttons (`.btn`, `.btn-primary`, `.btn-outline`)
3. Header (`.site-header`, `.nav-bar`, `.nav-link-active`, `.nav-hamburger`)
4. Homepage sections (hero, marquee, products grid, about, workshops)
5. Footer (`.site-footer`)
6. About Page (`.about-story`, `.about-recognized`, `.about-mission-vision`, `.about-leadership`)
7. Products Page (`.pcard` component with `.pcard-reverse` for alternating layout)
8. Contact Page (`.contact-info`, `.contact-form`)
9. Blogs Page (`.blog-card`)
10. Blog Detail Page (`.blog-article`, `.blog-section`)
11. Responsive breakpoints: `@media (max-width: 1024px)` then `@media (max-width: 768px)`

All responsive overrides for all pages live in two media query blocks at the bottom of the file.

## Design Tokens

Defined as CSS custom properties in `:root`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-primary` | `#272944` | Primary slate blue, nav bg, text |
| `--color-yellow` | `#f5d965` | CTA buttons, accent highlights |
| `--color-orange` | `#f25938` | Category labels, accent text |
| `--color-ivory` | `#fffbeb` | Card backgrounds |
| `--color-neutral-100` | `#1e1e1e` | Darkest body text |
| `--color-neutral-75` | `#444444` | Secondary body text |
| `--color-neutral-50` | `#6e6e6e` | Muted text |
| `--color-neutral-25` | `#b7b7b9` | Borders, placeholders |
| `--font-primary` | Lexend (300-700) | All headings and body |
| `--font-secondary` | Mulish (500) | Product card descriptions |

## Conventions

- **Active nav state**: Add `class="nav-link-active"` to the current page's nav `<a>` element
- **Product cards**: Use `.pcard` for normal (image left), `.pcard-reverse` for alternating (image right)
- **Blog detail pages**: Follow the existing pattern — `.blog-back-link` → `.blog-article-header` → `.blog-article-hero` → `.blog-article-body` with `.blog-section` blocks
- **New pages**: Copy an existing page's header/footer/nav structure (including the `.nav-hamburger` button) and add `nav-link-active` to the appropriate link
- **Mobile hamburger menu**: A `<button class="nav-hamburger">` with 3 `<span>` elements sits between the logo and `.nav-right` in every page. Hidden on desktop (`display: none`), shown at 768px. JS in `main.js` toggles `.open` class on both `.nav-hamburger` and `.nav-right`. The hamburger animates to an X via CSS transforms. Menu closes when any link is clicked
- **Horizontal padding**: Desktop uses `120px`, tablet `60px`, mobile `24px` — consistent across all page sections
- **Section spacing**: `margin-top: 88px` on desktop, `48px` on mobile
- **Glassmorphic effects**: Used via `backdrop-filter: blur()` on nav bar, product card overlays, contact form
