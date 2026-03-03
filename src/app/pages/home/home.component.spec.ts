import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home.component';

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

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    (globalThis as Record<string, unknown>)['IntersectionObserver'] = MockIntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  afterEach(() => {
    delete (globalThis as Record<string, unknown>)['IntersectionObserver'];
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render hero background', () => {
    expect(el.querySelector('gos-hero-background')).toBeTruthy();
  });

  it('should render hero section', () => {
    expect(el.querySelector('gos-hero-section')).toBeTruthy();
  });

  it('should render product mockup', () => {
    expect(el.querySelector('gos-product-mockup')).toBeTruthy();
  });

  it('should render trust strip', () => {
    expect(el.querySelector('gos-trust-strip')).toBeTruthy();
  });

  it('should render pain points section', () => {
    expect(el.querySelector('gos-pain-points-section')).toBeTruthy();
  });
});
