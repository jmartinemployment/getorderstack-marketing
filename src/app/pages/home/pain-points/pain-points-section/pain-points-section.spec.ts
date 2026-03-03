import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { PainPointsSectionComponent } from './pain-points-section';
import { PAIN_POINTS_DEFAULT } from '../pain-points.config';

// Mock IntersectionObserver for scroll reveal directive
class MockIntersectionObserver {
  constructor(private callback: IntersectionObserverCallback) {}
  observe(el: Element): void {
    // Immediately trigger reveal for tests
    this.callback(
      [{ isIntersecting: true, target: el } as IntersectionObserverEntry],
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

describe('PainPointsSectionComponent', () => {
  let fixture: ComponentFixture<PainPointsSectionComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    (globalThis as Record<string, unknown>)['IntersectionObserver'] = MockIntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [PainPointsSectionComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PainPointsSectionComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  afterEach(() => {
    delete (globalThis as Record<string, unknown>)['IntersectionObserver'];
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render section with id="problems"', () => {
    const section = el.querySelector('#problems');
    expect(section).toBeTruthy();
  });

  it('should render section header with eyebrow', () => {
    const header = el.querySelector('gos-section-header');
    expect(header).toBeTruthy();
  });

  it('should render correct number of pain point cards', () => {
    const cards = el.querySelectorAll('gos-pain-point-card');
    expect(cards.length).toBe(PAIN_POINTS_DEFAULT.painPoints.length);
  });

  it('should render bridge CTA', () => {
    const bridge = el.querySelector('gos-bridge-cta');
    expect(bridge).toBeTruthy();
  });

  it('should have aria-labelledby on section', () => {
    const section = el.querySelector('section');
    expect(section?.getAttribute('aria-labelledby')).toBe('pain-points-heading');
  });

  it('should use scroll reveal directive on card wrappers', () => {
    const wrappers = el.querySelectorAll('.pain-points__card-wrapper');
    expect(wrappers.length).toBe(PAIN_POINTS_DEFAULT.painPoints.length);
  });
});
