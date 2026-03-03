import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollToElement(elementId: string, offset = 80): void {
    if (typeof document === 'undefined') return;
    const element = document.getElementById(elementId);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  scrollToTop(behavior: ScrollBehavior = 'instant'): void {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior });
  }

  lockScroll(): () => void {
    if (typeof document === 'undefined') return () => {};

    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }
}
