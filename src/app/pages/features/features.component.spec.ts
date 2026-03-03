import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FeaturesComponent } from './features.component';

class MockIntersectionObserver {
  constructor(private callback: IntersectionObserverCallback) {}
  observe(el: Element): void {
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

describe('FeaturesComponent', () => {
  let fixture: ComponentFixture<FeaturesComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    (globalThis as Record<string, unknown>)['IntersectionObserver'] = MockIntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [FeaturesComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  afterEach(() => {
    delete (globalThis as Record<string, unknown>)['IntersectionObserver'];
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render page hero with section header', () => {
    const headers = el.querySelectorAll('gos-section-header');
    expect(headers.length).toBeGreaterThanOrEqual(1);
  });

  it('should render feature showcase section', () => {
    expect(el.querySelector('gos-feature-showcase-section')).toBeTruthy();
  });

  it('should render feature tab nav on features page', () => {
    expect(el.querySelector('gos-feature-tab-nav')).toBeTruthy();
  });

  it('should render 7 feature modules', () => {
    const modules = el.querySelectorAll('gos-feature-module');
    expect(modules.length).toBe(7);
  });
});
