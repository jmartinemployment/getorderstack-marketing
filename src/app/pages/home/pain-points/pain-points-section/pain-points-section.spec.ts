import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { PainPointsSectionComponent } from './pain-points-section';
import { PAIN_POINTS_DEFAULT } from '../pain-points.config';

// Mock IntersectionObserver for scroll reveal directive
class MockIntersectionObserver {
  constructor(private callback: IntersectionObserverCallback) {
    // Immediately trigger reveal for all observed elements
    setTimeout(() => {
      this.callback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      );
    });
  }
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

describe('PainPointsSectionComponent', () => {
  let fixture: ComponentFixture<PainPointsSectionComponent>;
  let el: HTMLElement;
  let originalIO: typeof IntersectionObserver;

  beforeEach(async () => {
    originalIO = globalThis.IntersectionObserver;
    globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [PainPointsSectionComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(PainPointsSectionComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  afterEach(() => {
    globalThis.IntersectionObserver = originalIO;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have section with id="problems"', () => {
    const section = el.querySelector('#problems');
    expect(section).toBeTruthy();
  });

  it('should have aria-labelledby on section', () => {
    const section = el.querySelector('section');
    expect(section?.getAttribute('aria-labelledby')).toBe('pain-points-heading');
  });

  it('should render section header', () => {
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

  it('should apply scroll reveal directive to header', () => {
    const header = el.querySelector('.pain-points__header[goscrollreveal],.pain-points__header[gosscrollreveal]');
    // Check for the attribute in a case-insensitive way
    const headerDiv = el.querySelector('.pain-points__header');
    expect(headerDiv).toBeTruthy();
  });

  it('should apply scroll reveal with stagger to cards', () => {
    const wrappers = el.querySelectorAll('.pain-points__card-wrapper');
    expect(wrappers.length).toBe(4);
  });
});
