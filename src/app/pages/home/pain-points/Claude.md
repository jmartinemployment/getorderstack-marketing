# Pain Points & Problem Statement (C-04)

## Purpose
Emotional resonance section below the hero. Validates visitor frustrations with existing
POS solutions (delivery commissions, hardware lock-in, hidden fees, slow onboarding)
before C-05 presents GetOrderStack features as the solution.

## Components
- PainPointsSectionComponent: section layout with card grid and scroll-triggered reveals
- PainPointCardComponent: icon-driven stat card for each pain point
- BridgeCtaComponent: transition text + CTA bridging to features section

## Shared
- ScrollRevealDirective: reusable IntersectionObserver-based scroll animation trigger
  Located at src/app/shared/directives/scroll-reveal.directive.ts
  Reused by C-05, C-08, and other sections with scroll-triggered animations

## Angular Patterns
- Standalone components, OnPush change detection, signal inputs
- CSS transitions for scroll reveal animations (not Angular Animations)
- IntersectionObserver via ScrollRevealDirective (not scroll events)
- Content externalized to pain-points.config.ts for A/B testing
- All animations use transform + opacity only (compositor properties)
- prefers-reduced-motion respected everywhere
- SSR safe: directive adds revealed class immediately on server

## Design Tokens Used
- --gos-gray-50: section background (light, contrasts with hero)
- --gos-danger, --gos-warning, --gos-primary: stat accents
- --gos-space-20 / --gos-space-32: vertical section padding
- --gos-radius-lg: card corners
- --gos-shadow-lg: card hover shadow

## Dependencies
- C-01: GosButtonComponent, GosContainerComponent, GosSectionHeaderComponent
- C-03: Sits directly below TrustStrip on the home page

## Layout
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 4 columns
- Cards stagger-reveal with 120ms delay between each
