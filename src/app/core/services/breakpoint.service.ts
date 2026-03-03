import { Injectable, signal, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class BreakpointService implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly queries = new Map<string, MediaQueryList>();

  readonly isMobile = signal(false);
  readonly isTablet = signal(false);
  readonly isDesktop = signal(true);

  private readonly listeners: Array<() => void> = [];

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.watch('(max-width: 767px)', this.isMobile);
      this.watch('(min-width: 768px) and (max-width: 1023px)', this.isTablet);
      this.watch('(min-width: 1024px)', this.isDesktop);
    }
  }

  private watch(query: string, target: ReturnType<typeof signal<boolean>>): void {
    const mql = window.matchMedia(query);
    target.set(mql.matches);

    const handler = (e: MediaQueryListEvent) => target.set(e.matches);
    mql.addEventListener('change', handler);

    this.queries.set(query, mql);
    this.listeners.push(() => mql.removeEventListener('change', handler));
  }

  ngOnDestroy(): void {
    for (const cleanup of this.listeners) {
      cleanup();
    }
  }
}
