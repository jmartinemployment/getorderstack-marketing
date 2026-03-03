# GetOrderStack Marketing Site

## Project Overview

Marketing site for GetOrderStack (getorderstack.com) — Angular 21 SSR application showcasing the restaurant management platform. Standalone Angular app, no Angular Elements, no WordPress integration.

**Stack:** Angular 21.2, SSR with hydration, SCSS design tokens, Vitest, Playwright E2E
**Prefix:** `gos-` for all component selectors
**Repo:** https://github.com/jmartinemployment/getorderstack-marketing

## Architecture

Single Angular 21 SSR application with:
- **Standalone components** — no NgModules
- **`ChangeDetectionStrategy.OnPush`** on all components
- **Signals** for state management
- **`inject()`** for DI — no constructor injection
- **Zoneless** — `provideZonelessChangeDetection()` in `app.config.ts`
- **SSR** with client hydration and event replay
- **Path aliases** — `@core/*`, `@environments/*`

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── components/       # 7 base components + barrel index.ts
│   │   ├── models/           # Shared types (types.ts)
│   │   └── services/         # breakpoint.service.ts
│   ├── shell/                # App shell (C-02)
│   │   ├── header/           # Scroll-aware sticky header (IntersectionObserver)
│   │   ├── mobile-nav/       # Slide-out drawer with focus trap + scroll lock
│   │   ├── announcement-bar/ # Dismissible promo banner
│   │   ├── layout/           # Root layout with router-outlet and scroll sentinel
│   │   ├── scroll.service.ts # Scroll lock, smooth anchor scroll, scroll-to-top
│   │   ├── nav.model.ts      # NavItem[], NAV_CTA, AnnouncementConfig
│   │   └── index.ts          # Barrel exports
│   ├── pages/                # Lazy-loaded page components
│   │   ├── home/             # Dark hero page (transparent header)
│   │   ├── features/         # Placeholder (C-05)
│   │   ├── pricing/          # Placeholder (C-06)
│   │   ├── demo/             # Placeholder (C-07)
│   │   ├── integrations/     # Placeholder (C-09)
│   │   ├── blog/             # Placeholder
│   │   └── get-started/      # Placeholder (C-11)
│   └── shared/               # Shared utilities (C-11)
├── environments/             # Dev + prod configs
├── styles/
│   ├── _tokens.scss          # CSS custom properties (--gos-*)
│   ├── _reset.scss           # Modern CSS reset
│   ├── _typography.scss      # Typography utility classes
│   ├── _mixins.scss          # Responsive breakpoints, helpers
│   └── _animations.scss      # Shared keyframe animations
└── assets/
    ├── fonts/
    ├── icons/                # SVG icons (loaded by GosIconComponent)
    └── images/
```

## Design Token System

All design values use CSS custom properties prefixed with `--gos-`. No hardcoded colors, sizes, or spacing in component SCSS — always reference tokens.

| Category | Prefix | Example |
|----------|--------|---------|
| Colors | `--gos-primary`, `--gos-gray-*` | `var(--gos-primary)` |
| Typography | `--gos-text-*`, `--gos-weight-*` | `var(--gos-text-lg)` |
| Spacing | `--gos-space-*` | `var(--gos-space-4)` |
| Borders | `--gos-radius-*`, `--gos-border` | `var(--gos-radius-md)` |
| Shadows | `--gos-shadow-*` | `var(--gos-shadow-md)` |
| Transitions | `--gos-transition-*` | `var(--gos-transition-fast)` |

## Base Components (7)

| Component | Selector | Key Features |
|-----------|----------|-------------|
| GosButton | `gos-button` | 5 variants, 3 sizes, loading spinner, full-width |
| GosCard | `gos-card` | 3 variants, content projection (header/body/footer), hoverable/clickable |
| GosInput | `gos-input` | ControlValueAccessor, label/hint/error, aria attributes |
| GosBadge | `gos-badge` | 6 color variants, 2 sizes, pill shape |
| GosIcon | `gos-icon` | SVG loader with HttpClient + cache, 4 sizes |
| GosContainer | `gos-container` | Max-width wrapper, narrow option |
| GosSectionHeader | `gos-section-header` | Eyebrow, title, subtitle, left/center alignment |

## Build & Dev

```bash
ng serve                    # Dev server with SSR
ng test                     # Vitest unit tests
npx playwright test         # E2E smoke tests
ng build                    # Production build
```

## Component Roadmap (C-01 through C-13)

- **C-01** — Scaffold & Design System (done)
- **C-02** — Shell (header, mobile nav, announcement bar, layout) (done)
- **C-03** — Hero section
- **C-04** — Features showcase
- **C-05** — Pricing section
- **C-06** — Testimonials
- **C-07** — CTA sections
- **C-08** — FAQ
- **C-09** — Integration logos
- **C-10** — Footer
- **C-11** — Shared utilities
- **C-12** — SEO & meta
- **C-13** — Analytics & tracking

### Session Notes

**March 3, 2026 (C-01):**
- Scaffolded Angular 21.2 SSR project with `ng new`
- Created GitHub repo: jmartinemployment/getorderstack-marketing
- Built complete design token system (5 SCSS partials)
- Created 7 base components with specs
- Set up Playwright E2E with smoke tests
- Showcase route renders all component variants
- Added zoneless change detection, HttpClient with fetch
- Path aliases: @core/*, @environments/*

**March 3, 2026 (C-02):**
- Built app shell: HeaderComponent, MobileNavComponent, AnnouncementBarComponent, LayoutComponent
- Header: scroll-aware via IntersectionObserver (not scroll events), transparent→solid transition
- Mobile nav: slide-out drawer, focus trap, scroll lock via ScrollService, Escape to close
- Announcement bar: dismissible promo banner with signal state
- Layout: root wrapper with router-outlet, scroll sentinel, announcement visibility coordination
- ScrollService: lockScroll/scrollToTop/scrollToElement with SSR guards
- 7 lazy-loaded routes with placeholder pages (home, features, pricing, demo, integrations, blog, get-started)
- Route preloading via PreloadAllModules, scroll restoration via withInMemoryScrolling
- Added --gos-z-header token (300), renumbered z-index scale
- Fixed BreakpointService: guard against missing matchMedia in jsdom tests
- 55 tests across 12 spec files, all passing
- Root component now renders LayoutComponent (replaced C-01 showcase)
- Next: C-03 (hero section)
