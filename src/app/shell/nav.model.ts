export interface NavItem {
  label: string;
  route: string;
  fragment?: string;
  external?: boolean;
  children?: NavItem[];
  highlight?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', route: '/features' },
  { label: 'Pricing', route: '/pricing' },
  { label: 'Demo', route: '/demo' },
  { label: 'Integrations', route: '/integrations' },
  { label: 'Blog', route: '/blog' },
];

export const NAV_CTA: NavItem = {
  label: 'Get Started Free',
  route: '/get-started',
  highlight: true,
};

export interface AnnouncementConfig {
  message: string;
  linkText?: string;
  linkRoute?: string;
  dismissible: boolean;
}

export const ANNOUNCEMENT: AnnouncementConfig = {
  message: 'Now serving South Florida restaurants —',
  linkText: 'See how we compare to Toast',
  linkRoute: '/pricing',
  dismissible: true,
};
