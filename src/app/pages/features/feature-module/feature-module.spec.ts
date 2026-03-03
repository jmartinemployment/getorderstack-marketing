import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FeatureModuleComponent } from './feature-module';
import { FeatureModule } from '../features.config';

let intersectionCallback: IntersectionObserverCallback;

class MockIntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    intersectionCallback = callback;
  }
  observe(): void {
    intersectionCallback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    );
  }
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
  get root(): Element | null { return null; }
  get rootMargin(): string { return ''; }
  get thresholds(): readonly number[] { return []; }
}

const MOCK_FEATURE: FeatureModule = {
  id: 'pos',
  tag: 'Core Platform',
  title: 'POS & Online Ordering',
  description: 'Take orders from every channel.',
  bullets: [
    { text: 'Unified order flow' },
    { text: 'BYOD support' },
    { text: 'Real-time tracking' },
  ],
  ctaText: 'Explore POS',
  ctaRoute: '/features',
  visualType: 'pos-terminal',
  accentColor: 'primary',
};

@Component({
  standalone: true,
  imports: [FeatureModuleComponent],
  template: `
    <gos-feature-module
      [feature]="feature()"
      [reversed]="reversed()"
      [index]="0" />
  `,
})
class TestHost {
  feature = signal(MOCK_FEATURE);
  reversed = signal(false);
}

describe('FeatureModuleComponent', () => {
  let fixture: ComponentFixture<TestHost>;
  let el: HTMLElement;

  beforeEach(async () => {
    (globalThis as Record<string, unknown>)['IntersectionObserver'] = MockIntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  afterEach(() => {
    delete (globalThis as Record<string, unknown>)['IntersectionObserver'];
  });

  it('should render feature title', () => {
    const title = el.querySelector('.feature-module__title');
    expect(title?.textContent?.trim()).toBe('POS & Online Ordering');
  });

  it('should render feature description', () => {
    const desc = el.querySelector('.feature-module__description');
    expect(desc?.textContent?.trim()).toBe('Take orders from every channel.');
  });

  it('should render correct number of bullets', () => {
    const bullets = el.querySelectorAll('.feature-module__bullet');
    expect(bullets.length).toBe(3);
  });

  it('should render badge with feature tag', () => {
    const badge = el.querySelector('gos-badge');
    expect(badge?.textContent?.trim()).toBe('Core Platform');
  });

  it('should render CTA link with correct text', () => {
    const cta = el.querySelector('.feature-module__cta-link');
    expect(cta?.textContent).toContain('Explore POS');
  });

  it('should have id for deep linking', () => {
    const article = el.querySelector('article');
    expect(article?.id).toBe('feature-pos');
  });

  it('should apply reversed class when reversed is true', () => {
    fixture.componentInstance.reversed.set(true);
    fixture.detectChanges();
    expect(el.querySelector('.feature-module--reversed')).toBeTruthy();
  });

  it('should not apply reversed class by default', () => {
    expect(el.querySelector('.feature-module--reversed')).toBeFalsy();
  });

  it('should render feature visual', () => {
    expect(el.querySelector('gos-feature-visual')).toBeTruthy();
  });

  it('should render bullet icons with accent color class', () => {
    const icon = el.querySelector('.feature-module__bullet-icon--primary');
    expect(icon).toBeTruthy();
  });
});
