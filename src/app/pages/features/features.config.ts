export interface FeatureBullet {
  text: string;
}

export interface FeatureModule {
  id: string;
  tag: string;
  title: string;
  description: string;
  bullets: FeatureBullet[];
  ctaText: string;
  ctaRoute: string;
  visualType: FeatureVisualType;
  accentColor: FeatureAccent;
}

export type FeatureVisualType =
  | 'pos-terminal'
  | 'kds-display'
  | 'delivery-map'
  | 'payment-flow'
  | 'menu-builder'
  | 'analytics-dashboard'
  | 'ai-insights';

export type FeatureAccent =
  | 'primary'
  | 'success'
  | 'info'
  | 'secondary';

export interface FeatureShowcaseConfig {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSubtitle: string;
  features: FeatureModule[];
}

export const FEATURES_CONFIG: FeatureShowcaseConfig = {
  sectionEyebrow: 'What You Get',
  sectionTitle: 'Everything Your Restaurant Needs. Nothing It Doesn\'t.',
  sectionSubtitle:
    'Seven integrated modules that replace your entire tech stack — ' +
    'POS, kitchen display, delivery, payments, menus, analytics, and AI — all in one platform.',
  features: [
    {
      id: 'pos',
      tag: 'Core Platform',
      title: 'POS & Online Ordering That Just Works',
      description:
        'Take orders from every channel — dine-in, takeout, delivery, and online — through ' +
        'a single unified interface. No juggling multiple tablets. No missed orders. ' +
        'Works on your existing devices.',
      bullets: [
        { text: 'Unified order flow across dine-in, takeout, delivery, and online' },
        { text: 'BYOD — runs on any tablet, phone, or browser' },
        { text: 'Real-time order tracking with automatic status updates' },
        { text: 'Custom modifier trees and combo meal logic' },
      ],
      ctaText: 'Explore POS Features',
      ctaRoute: '/features',
      visualType: 'pos-terminal',
      accentColor: 'primary',
    },
    {
      id: 'kds',
      tag: 'Back of House',
      title: 'Kitchen Display That Keeps Your Line Moving',
      description:
        'Replace paper tickets with a digital KDS that routes orders to the right station, ' +
        'tracks prep times, and alerts your team when items are falling behind. ' +
        'Your kitchen staff will wonder how they worked without it.',
      bullets: [
        { text: 'Multi-station routing — grill, fryer, expo, bar' },
        { text: 'Color-coded urgency: green → yellow → red based on ticket age' },
        { text: 'Bump-bar and touchscreen support' },
        { text: 'Average prep time tracking per item and per station' },
      ],
      ctaText: 'See KDS In Action',
      ctaRoute: '/demo',
      visualType: 'kds-display',
      accentColor: 'primary',
    },
    {
      id: 'delivery',
      tag: 'Zero Commissions',
      title: 'Direct Delivery. Zero Commission. Your Customers.',
      description:
        'Own your delivery channel. Customers order directly from you — no UberEats, ' +
        'no DoorDash, no 30% cut. Dispatch to your own drivers or integrate with ' +
        'on-demand delivery networks at a flat fee.',
      bullets: [
        { text: 'Direct online ordering — your brand, your customer data' },
        { text: 'Built-in driver dispatch with real-time GPS tracking' },
        { text: 'On-demand delivery network integration at flat per-delivery fee' },
        { text: 'Automated delivery zone configuration and fee calculation' },
      ],
      ctaText: 'Calculate Your Savings',
      ctaRoute: '/pricing',
      visualType: 'delivery-map',
      accentColor: 'success',
    },
    {
      id: 'payments',
      tag: 'Transparent Pricing',
      title: 'Payments Without the Payment Tax',
      description:
        'Flat-rate processing with no hidden fees. Accept cards, contactless, mobile wallets, ' +
        'and cash — all through one system. See every cent on a single dashboard, ' +
        'with next-day deposits.',
      bullets: [
        { text: 'Flat 2.5% + $0.10 — no tiered pricing surprises' },
        { text: 'Accept tap-to-pay, Apple Pay, Google Pay, and cards' },
        { text: 'Integrated tipping, split checks, and partial payments' },
        { text: 'Next-business-day deposits to your bank account' },
      ],
      ctaText: 'See Pricing Details',
      ctaRoute: '/pricing',
      visualType: 'payment-flow',
      accentColor: 'success',
    },
    {
      id: 'menu',
      tag: 'Operations',
      title: 'One Menu to Rule Them All',
      description:
        'Update your menu once and it syncs everywhere — POS, online ordering, KDS, ' +
        'and third-party marketplaces. Schedule daypart changes, 86 items in real-time, ' +
        'and manage modifiers from a single dashboard.',
      bullets: [
        { text: 'Single source of truth across all channels' },
        { text: 'Daypart scheduling — breakfast, lunch, dinner, late night' },
        { text: 'Real-time 86 (out-of-stock) with instant POS + online sync' },
        { text: 'Photo management with auto-optimization for web' },
      ],
      ctaText: 'See Menu Tools',
      ctaRoute: '/features',
      visualType: 'menu-builder',
      accentColor: 'secondary',
    },
    {
      id: 'analytics',
      tag: 'Intelligence',
      title: 'Know Your Numbers Before They Know You',
      description:
        'Real-time sales, labor, and food cost dashboards that surface what matters. ' +
        'Track revenue by channel, identify your best-sellers, and spot trends ' +
        'before they become problems.',
      bullets: [
        { text: 'Real-time sales tracking by channel, item, and time period' },
        { text: 'Labor cost percentage with overtime alerts' },
        { text: 'Product mix analysis — find your most (and least) profitable items' },
        { text: 'Daily, weekly, and monthly comparison reports' },
      ],
      ctaText: 'Explore Analytics',
      ctaRoute: '/features',
      visualType: 'analytics-dashboard',
      accentColor: 'info',
    },
    {
      id: 'ai',
      tag: 'AI-Powered',
      title: 'Claude-Powered Intelligence Built In',
      description:
        'GetOrderStack is built with Anthropic\'s Claude AI at its core. Get demand ' +
        'forecasting, automated inventory suggestions, natural-language reporting, and ' +
        'smart menu recommendations — no data science team required.',
      bullets: [
        { text: 'Demand forecasting — predict your busiest hours and days' },
        { text: 'Natural language queries: "How did lunch sales compare to last Tuesday?"' },
        { text: 'Automated menu price optimization suggestions' },
        { text: 'Smart inventory alerts based on sales velocity' },
      ],
      ctaText: 'See AI In Action',
      ctaRoute: '/demo',
      visualType: 'ai-insights',
      accentColor: 'primary',
    },
  ],
};
