import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    data: { title: 'GetOrderStack — Restaurant Operating System', transparent: true },
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./pages/features/features.component').then(m => m.FeaturesComponent),
    data: { title: 'Features — GetOrderStack' },
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
    data: { title: 'Pricing — GetOrderStack' },
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('./pages/demo/demo.component').then(m => m.DemoComponent),
    data: { title: 'Demo — GetOrderStack' },
  },
  {
    path: 'integrations',
    loadComponent: () =>
      import('./pages/integrations/integrations.component').then(m => m.IntegrationsComponent),
    data: { title: 'Integrations — GetOrderStack' },
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then(m => m.BlogComponent),
    data: { title: 'Blog — GetOrderStack' },
  },
  {
    path: 'get-started',
    loadComponent: () =>
      import('./pages/get-started/get-started.component').then(m => m.GetStartedComponent),
    data: { title: 'Get Started — GetOrderStack' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
