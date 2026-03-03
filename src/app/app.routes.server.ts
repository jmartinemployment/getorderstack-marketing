import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'features',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'pricing',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'demo',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'integrations',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'blog',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'get-started',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
