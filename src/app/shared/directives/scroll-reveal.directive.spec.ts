import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ScrollRevealDirective } from './scroll-reveal.directive';

let observerCallback: IntersectionObserverCallback;
let observerDisconnect: ReturnType<typeof vi.fn>;

function triggerIntersection(isIntersecting: boolean): void {
  observerCallback(
    [{ isIntersecting } as IntersectionObserverEntry],
    {} as IntersectionObserver,
  );
}

@Component({
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `<div gosScrollReveal id="target">Content</div>`,
})
class TestHostComponent {}

@Component({
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `<div gosScrollReveal [gosScrollRevealDelay]="200" id="delayed">Content</div>`,
})
class DelayedHostComponent {}

@Component({
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `<div gosScrollReveal [gosScrollRevealOnce]="false" id="toggle">Content</div>`,
})
class ToggleHostComponent {}

describe('ScrollRevealDirective', () => {
  let originalIO: typeof IntersectionObserver | undefined;

  beforeEach(() => {
    originalIO = globalThis.IntersectionObserver;
    observerDisconnect = vi.fn();

    globalThis.IntersectionObserver = class {
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback;
      }
      observe = vi.fn();
      disconnect = observerDisconnect;
      unobserve = vi.fn();
      root = null;
      rootMargin = '';
      thresholds = [] as number[];
      takeRecords = () => [] as IntersectionObserverEntry[];
    } as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    if (originalIO) {
      globalThis.IntersectionObserver = originalIO;
    }
  });

  it('should add is-revealed class when element enters viewport', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('#target') as HTMLElement;
    expect(el.classList.contains('is-revealed')).toBe(false);

    triggerIntersection(true);
    expect(el.classList.contains('is-revealed')).toBe(true);
  });

  it('should disconnect observer after reveal when once is true', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    triggerIntersection(true);
    expect(observerDisconnect).toHaveBeenCalled();
  });

  it('should respect delay input', () => {
    vi.useFakeTimers();

    const fixture = TestBed.createComponent(DelayedHostComponent);
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('#delayed') as HTMLElement;

    triggerIntersection(true);
    expect(el.classList.contains('is-revealed')).toBe(false);

    vi.advanceTimersByTime(200);
    expect(el.classList.contains('is-revealed')).toBe(true);

    vi.useRealTimers();
  });

  it('should toggle class when once is false', () => {
    const fixture = TestBed.createComponent(ToggleHostComponent);
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('#toggle') as HTMLElement;

    triggerIntersection(true);
    expect(el.classList.contains('is-revealed')).toBe(true);

    triggerIntersection(false);
    expect(el.classList.contains('is-revealed')).toBe(false);
  });

  it('should not disconnect when once is false', () => {
    const fixture = TestBed.createComponent(ToggleHostComponent);
    fixture.detectChanges();

    triggerIntersection(true);
    expect(observerDisconnect).not.toHaveBeenCalled();
  });
});
