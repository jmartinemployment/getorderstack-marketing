# Shell Components (C-02)

## Purpose
Site-wide navigation, layout, and app shell for the GetOrderStack marketing site.
Contains the header, mobile nav drawer, announcement bar, and root layout.

## Components
- HeaderComponent: scroll-aware sticky header (Intersection Observer, NOT scroll events)
- MobileNavComponent: slide-out drawer with focus trap and scroll lock
- AnnouncementBarComponent: dismissible promo banner
- LayoutComponent: root layout with router-outlet and scroll sentinel

## Angular Patterns
- Standalone components only
- Signals for all component state (isScrolled, mobileMenuOpen, announcementDismissed)
- OnPush change detection on every component
- CSS transitions for animations (not Angular Animations — SSR safe)
- SSR guards on all DOM/window/document access: `if (typeof window === 'undefined') return;`

## Design Tokens Used
- --gos-z-header: 300 for header stacking
- --gos-z-overlay: 400 for mobile nav overlay
- --gos-secondary for solid header and mobile nav background
- --gos-primary for announcement bar background and CTA
- --gos-transition-base: 250ms ease for header state transitions
- --gos-shadow-md for scrolled header shadow

## Dependencies
- C-01: GosButtonComponent, GosContainerComponent
- C-01: BreakpointService
- Angular Router (RouterLink, RouterLinkActive, RouterOutlet)

## Key Implementation Details
- Scroll detection uses IntersectionObserver on a sentinel div, NOT scroll events
- Mobile nav uses CSS transitions, focus trapping, and scroll lock via ScrollService
- All DOM access is SSR-guarded
- Nav items defined in nav.model.ts — single source of truth
- Layout passes announcement visibility to header for offset calculation

## Testing
- Vitest for unit tests
- Test scroll state changes via mock IntersectionObserver
- Test mobile nav open/close/escape/overlay-click
- Test announcement bar dismiss behavior
- Test route-based transparent header logic
