import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { vi } from 'vitest';
import { ScrollRevealDirective } from './scroll-reveal.directive';

let intersectionCallback: IntersectionObserverCallback;
let disconnected = false;

class MockIntersectionObserver {
  constructor(callback: IntersectionObserverCallback, public options?: IntersectionObserverInit) {
    intersectionCallback = callback;
    disconnected = false;
  }
  observe(): void {}
  unobserve(): void {}
  disconnect(): void { disconnected = true; }
  takeRecords(): IntersectionObserverEntry[] { return []; }
  get root(): Element | null { return null; }
  get rootMargin(): string { return ''; }
  get thresholds(): readonly number[] { return []; }
}

function triggerIntersection(isIntersecting: boolean): void {
  intersectionCallback(
    [{ isIntersecting } as IntersectionObserverEntry],
    {} as IntersectionObserver,
  );
}

@Component({
  standalone: true,
  imports: [ScrollRevealDirective],
  template: '<div gosScrollReveal>test</div>',
})
class TestHostComponent {}

@Component({
  standalone: true,
  imports: [ScrollRevealDirective],
  template: '<div gosScrollReveal [gosScrollRevealDelay]="200">delayed</div>',
})
class DelayedHostComponent {}

@Component({
  standalone: true,
  imports: [ScrollRevealDirective],
  template: '<div gosScrollReveal [gosScrollRevealOnce]="false">toggle</div>',
})
class ToggleHostComponent {}

describe('ScrollRevealDirective', () => {
  beforeEach(() => {
    (globalThis as Record<string, unknown>)['IntersectionObserver'] = MockIntersectionObserver;
    disconnected = false;
  });

  afterEach(() => {
    delete (globalThis as Record<string, unknown>)['IntersectionObserver'];
    vi.useRealTimers();
  });

  it('should add is-revealed class when element enters viewport', () => {
    const fixture = TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).createComponent(TestHostComponent);
    fixture.detectChanges();

    const div = fixture.nativeElement.querySelector('div');
    expect(div.classList.contains('is-revealed')).toBe(false);

    triggerIntersection(true);
    expect(div.classList.contains('is-revealed')).toBe(true);
  });

  it('should disconnect observer after reveal with once=true (default)', () => {
    const fixture = TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).createComponent(TestHostComponent);
    fixture.detectChanges();

    triggerIntersection(true);
    expect(disconnected).toBe(true);
  });

  it('should respect delay input', () => {
    vi.useFakeTimers();

    const fixture = TestBed.configureTestingModule({
      imports: [DelayedHostComponent],
    }).createComponent(DelayedHostComponent);
    fixture.detectChanges();

    const div = fixture.nativeElement.querySelector('div');
    triggerIntersection(true);
    expect(div.classList.contains('is-revealed')).toBe(false);

    vi.advanceTimersByTime(200);
    expect(div.classList.contains('is-revealed')).toBe(true);
  });

  it('should toggle class with once=false', () => {
    const fixture = TestBed.configureTestingModule({
      imports: [ToggleHostComponent],
    }).createComponent(ToggleHostComponent);
    fixture.detectChanges();

    const div = fixture.nativeElement.querySelector('div');
    triggerIntersection(true);
    expect(div.classList.contains('is-revealed')).toBe(true);

    triggerIntersection(false);
    expect(div.classList.contains('is-revealed')).toBe(false);
  });

  it('should not disconnect observer with once=false', () => {
    const fixture = TestBed.configureTestingModule({
      imports: [ToggleHostComponent],
    }).createComponent(ToggleHostComponent);
    fixture.detectChanges();

    triggerIntersection(true);
    expect(disconnected).toBe(false);
  });

  it('should add class immediately on SSR', () => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const div = fixture.nativeElement.querySelector('div');
    expect(div.classList.contains('is-revealed')).toBe(true);
  });
});
