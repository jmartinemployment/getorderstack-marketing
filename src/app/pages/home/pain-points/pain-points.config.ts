export interface PainPoint {
  icon: string;
  stat: string;
  statSuffix?: string;
  headline: string;
  description: string;
  accentColor: 'error' | 'warning' | 'primary';
}

export interface BridgeConfig {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaRoute: string;
  ctaAriaLabel: string;
}

export interface PainPointsConfig {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSubtitle: string;
  painPoints: PainPoint[];
  bridge: BridgeConfig;
}

export const PAIN_POINTS_DEFAULT: PainPointsConfig = {
  sectionEyebrow: 'The Problem',
  sectionTitle: 'Restaurant Tech Is Eating Your Profits',
  sectionSubtitle:
    'Current POS solutions charge too much, lock you into hardware, and hide the real costs. ' +
    'Sound familiar?',
  painPoints: [
    {
      icon: 'commission',
      stat: '15\u201330%',
      statSuffix: 'lost per order',
      headline: 'Delivery Commissions Are Crushing Margins',
      description:
        'Third-party delivery apps take 15\u201330% of every order. On a $50 order, ' +
        'that\'s up to $15 going to someone else \u2014 not your kitchen, not your staff, not your bottom line.',
      accentColor: 'error',
    },
    {
      icon: 'lock',
      stat: '$1,000+',
      statSuffix: 'upfront hardware',
      headline: 'Locked Into Proprietary Hardware',
      description:
        'Toast requires their terminals. Square pushes their readers. If you want to switch, ' +
        'your hardware becomes a paperweight. Your restaurant, their rules.',
      accentColor: 'warning',
    },
    {
      icon: 'hidden',
      stat: '47%',
      statSuffix: 'report surprise fees',
      headline: 'Hidden Fees Everywhere',
      description:
        'Processing fees, monthly platform fees, per-transaction fees, integration fees. ' +
        'By the time you add it all up, you\'re paying far more than the sticker price promised.',
      accentColor: 'error',
    },
    {
      icon: 'clock',
      stat: '3\u20136 weeks',
      statSuffix: 'average setup time',
      headline: 'Complex Setup, Slow Onboarding',
      description:
        'Weeks of setup, training sessions, hardware installation, menu configuration. ' +
        'Every day without your system running is a day of lost revenue and frustrated staff.',
      accentColor: 'primary',
    },
  ],
  bridge: {
    headline: 'There\u2019s a better way.',
    subtext: 'What if your POS charged zero delivery commissions, worked on your existing devices, and took minutes to set up?',
    ctaLabel: 'See How GetOrderStack Is Different',
    ctaRoute: '/features',
    ctaAriaLabel: 'See GetOrderStack features that solve these problems',
  },
};
