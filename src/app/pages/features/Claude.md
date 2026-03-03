# Feature Showcase Modules (C-05)

## Purpose
Core product feature presentation — 7 modules showcasing GetOrderStack's capabilities.
Converts interest from the hero/pain points into understanding of what the product does.
Used both embedded on the home page (without tab nav) and as a standalone /features page
(with sticky tab nav).

## Components
- FeatureShowcaseSectionComponent: parent orchestrator, scroll-tracking for active tab
- FeatureModuleComponent: alternating text/visual layout block (reversible grid)
- FeatureVisualComponent: CSS-based UI illustrations per feature (no image dependencies)
- FeatureTabNavComponent: sticky horizontal tab bar with scroll-snap on mobile

## 7 Feature Modules
1. POS & Ordering (pos) — primary accent
2. Kitchen Display System (kds) — primary accent
3. Delivery Management (delivery) — success/green accent
4. Payment Processing (payments) — success/green accent
5. Menu Management (menu) — secondary/neutral accent
6. Analytics Dashboard (analytics) — info/blue accent
7. AI-Powered Insights (ai) — primary accent

## Angular Patterns
- Standalone components, OnPush change detection, signals
- ScrollRevealDirective from C-04 for scroll-triggered entrance animations
- IntersectionObserver for active-tab tracking (not scroll events)
- All content from features.config.ts — no hardcoded copy
- CSS illustrations using abstract UI blocks (no image file dependencies)
- Feature modules deep-linkable via id="feature-{id}" + URL fragments

## Layout
- Features alternate: text-left/visual-right → visual-left/text-right
- Mobile: stacked (text above visual)
- Desktop: 50/50 grid
- Tab nav: sticky below header, horizontal scroll on mobile

## Dependencies
- C-01: GosBadgeComponent, GosContainerComponent, GosSectionHeaderComponent
- C-02: ScrollService for tab-click scrolling
- C-04: ScrollRevealDirective for entrance animations

## Testing
- Vitest for all components
- Mock IntersectionObserver for scroll tracking tests
- Test alternating reversed layout
- Test each FeatureVisualType renders
- Test tab nav active state updates
- Test deep-link anchors
