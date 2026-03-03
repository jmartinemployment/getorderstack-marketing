export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroCopy {
  eyebrow: string;
  headlineBefore: string;
  headlineHighlight: string;
  headlineAfter: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
  stats: HeroStat[];
  trustHeading: string;
  trustLogos: string[];
}

export const HERO: HeroCopy = {
  eyebrow: 'The all-in-one restaurant platform',
  headlineBefore: 'Run your restaurant,',
  headlineHighlight: 'not your software',
  headlineAfter: '',
  subtitle:
    'POS, ordering, inventory, labor, and analytics — all in one platform. No contracts, no hidden fees.',
  ctaPrimary: 'Get started free',
  ctaPrimaryHref: '/get-started',
  ctaSecondary: 'See a demo',
  ctaSecondaryHref: '/demo',
  stats: [
    { value: '2.6%', label: 'Processing rate' },
    { value: '0', label: 'Monthly fees to start' },
    { value: '5 min', label: 'Setup time' },
  ],
  trustHeading: 'Trusted by restaurants across South Florida',
  trustLogos: [
    'Taipa Restaurant',
    'Blue Wave Sushi',
    'La Mesa Cocina',
    'Coral Grill',
    'Palm & Vine',
    'Shore House Kitchen',
  ],
};
