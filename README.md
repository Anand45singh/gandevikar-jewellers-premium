# Girishbhai Gandevikar Jewellers: Premium Website Rebuild

A premium, responsive rebuild of the heritage jewellery website for **Girishbhai Gandevikar Jewellers, Vadodara (est. 1927)**, built for the *Premium Website Development Assignment*.

The goal was to keep the brand's identity, content and look and feel, and raise the quality of the execution: typography, spacing, motion, navigation and performance. It is not a rebrand.

| | |
|---|---|
| **Live URL** | `https://gandevikar-jewellers-premium.vercel.app/`  |
| **Repository** | `https://github.com/Anand45singh/gandevikar-jewellers-premium`  |
| **Reference site** | https://girishbhaigandevikar.com |
| **Hosting** | Vercel (separate project; the production domain is **not** connected) |

---

## 1. Tech stack

| Area | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| Styling | Tailwind CSS 3 with custom brand tokens |
| Motion | Framer Motion (scroll story, reveals, preloader), Lenis (smooth scroll) |
| Forms | react-hook-form + zod |
| Icons | lucide-react |
| Fonts | Cormorant Garamond (headings) and Jost (body) via `next/font` |

## 2. Brand and design system

Colours, type and ornaments follow the original site.

| Token | Value | Use |
|---|---|---|
| Gold | `#d7b46a` | Accents, dividers, icons |
| Maroon | `#8C1B22` | Category overlays, footer band, CTAs |
| Ivory | `#FBF7F0` | Page background |
| Ink | `#2A2118` | Body text |
| Obsidian | `#0B0B0B` | Hero and dark sections |

- Headings: Cormorant Garamond, regular weight, wide tracking. Body: Jost Light.
- Labels: small uppercase text with wide letter-spacing.
- The gold-line and flower-motif **ornament divider** is reused across sections.
- Buttons have square corners, uppercase text and a subtle hover lift.

## 3. What was built

### Pages

| Route | Description |
|---|---|
| `/` | Video hero, house introduction, sticky scroll story, 8-tile category grid, Suvarna Vruddhi Yojana (11+1) section, keyword marquee |
| `/services` | Jewellery categories and services, gold scheme details, gallery with lightbox and category filter, enquiry modal |
| `/amya` | AMYA everyday-wear collection with hover image swap |
| `/timeline` | 100-year heritage timeline with a scroll-drawn line |
| `/reviews` | Rating summary and review cards |
| `/blog`, `/blog/[slug]` | Journal listing and article pages with Article structured data |
| `/faq` | Searchable accordion (supports `?q=`) with FAQ structured data |
| `/contact` | Showroom details, live Open/Closed badge in IST, embedded map, appointment form, "Send on WhatsApp" |
| `/collections`, `/journal` | Redirect to `/services` and `/blog` |
| `404` | Branded not-found page |

### Global features

- Fixed header: transparent over the hero, then ivory with blur after scrolling. Second nav row hides on scroll down and returns on scroll up.
- Full-screen mobile drawer menu.
- **English / Gujarati** language toggle (falls back to English where no Gujarati text exists). The choice is saved in the browser.
- Gold Rates dropdown in the header, backed by `/api/gold-rates`.
- Footer with directions, social links, store photo and the maroon brand band.
- Floating WhatsApp, call and directions actions, plus a gold scroll-progress bar.
- Branded preloader (once per session, click to skip).
- Custom gold cursor on desktop fine-pointer devices only.
- `prefers-reduced-motion` is respected.

### Hero video behaviour

The poster image paints first. The video loads afterwards and is skipped entirely when the user has Data Saver on, a 2G connection, or reduced motion enabled.

## 4. Performance work

- Hero video compressed from **33 MB to about 1 MB** (720p, 25 fps, 14 s, no audio). MP4 and WebM sources are both provided.
- All images served through `next/image` (WebP only, with `sizes` set per slot).
- Animations use `transform` and `opacity` only.
- The page transition is CSS-only (a Framer `AnimatePresence` version caused double renders in the App Router and was removed).
- The custom cursor uses motion values, so mouse movement does not re-render React.
- `optimizePackageImports` is enabled for `framer-motion` and `lucide-react`.
- Config is minimal and runs on Turbopack. No custom webpack function.

## 5. Project structure

```
app/            Routes, layout, API routes (enquiry, gold-rates)
components/
  home/         Hero, HouseIntro, StickyScrollStory, CategoryGrid, SuvarnaVruddhiTeaser, MarqueeStrip
  navigation/   Header, MobileMenu, Footer, GoldRatesDropdown, FloatingActions, LanguageToggle
  providers/    LanguageProvider, SmoothScroll, PageTransitionWrapper
  services/     EnquiryModal
  ui/           Button, Reveal, Accordion, Tabs, Modal, Preloader, CustomCursor, ...
content/        All copy and data (typed .ts files); edit text here, not in JSX
lib/            Gold-rate provider, utilities
public/images/  Hero video and poster, store, banner
public/images/ggj/  Category and scroll-story images
```

## 6. Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

Requires Node 20 or newer. Keep the project outside OneDrive or Dropbox folders; sync makes `node_modules` and the dev server very slow.

**Editing content:** change text in `content/*.ts` and images in `public/images/`. Image filenames are case-sensitive on Vercel (for example `Everyday.webp`, not `everyday.webp`).

## 7. Deployment (Vercel)

1. Push the repository to GitHub.
2. In Vercel choose **Add New, Project**, import the repo. The Next.js preset is detected automatically.
3. Deploy. Every `git push` to `main` redeploys.
4. Environment variables, if used, go in **Project Settings, Environment Variables** only. Never commit them.

The site is set to `noindex` so the staging URL does not compete with the live site. The production domain `girishbhaigandevikar.com` is **not** attached to this project and must stay that way.

## 8. External services still required

These features are built but need configuration, or a real provider, to be fully functional.

| Feature | Current state | What is needed |
|---|---|---|
| **Enquiry form** (`/api/enquiry`) | Validates input (zod, honeypot) and returns success, but only logs the request on the server. **No email is sent.** | An email provider (for example Resend or SMTP) and variables such as `ENQUIRY_TO_EMAIL`. The "Send on WhatsApp" button already works. |
| **Live gold rates** (`/api/gold-rates`) | No numbers are shown. The UI says *"Call store for today's rate: +91 99255 79633"*. This is deliberate so that no fake rates appear. | A bullion-rate API key in `GOLD_API_KEY`, plus the fetch logic in `lib/goldRates.ts`. The store should confirm the rate source, because retail Vadodara rates differ from spot prices. |
| **Google reviews** | Static data in `content/reviews.ts` | Google Places API, or manually copied real reviews. |
| **`/gold-rates` page** | Not built; the dropdown links to it | Page to be added once a rate source exists. |

## 9. Known limitations (please read)

Listed honestly so nothing is mistaken for finished work.

1. **Reviews content must be replaced before client delivery.** `content/reviews.ts` contains sample named reviews that were not copied from the original site. Replace them with real Google reviews, or remove the cards and keep only the real rating summary (4.9 from 4,065+ reviews, as stated on the original site).
2. **Copy needs a check against the live site.** Services, Timeline, Journal and Gujarati text should be compared line by line with the original. Some text, for example the footer caption "Historic Mandvi Bazaars" and parts of the timeline story, must be confirmed with the client.
3. **Images are stock placeholders.** The category, scroll-story, banner and store images, and the hero video and poster, are royalty-free stand-ins. Original brand images should replace them under the **same filenames**; no code change is needed.
4. **Brand logo and mark files are not included.** The header and footer currently use text and SVG marks. Add the official logo files if required.
5. **Some images are low resolution** (for example `Everyday.webp` is 225 px wide) and look soft on large tiles. Use files at least 800 px wide.
6. **Structured data (JSON-LD) and sitemap** are only partly in place (blog and FAQ pages). `sitemap.ts`, `robots.ts` and site-wide `JewelryStore` markup are still to be added.
7. **Tests:** no automated tests yet. Manual checks were done on desktop and mobile widths.

## 10. Credits

- Original brand, content and identity: Girishbhai Gandevikar Jewellers.
- Stock photography and video: see `public/images/CREDITS.md` once source and licence details are filled in.
