import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FeatureShowcaseSectionComponent } from './feature-showcase-section';
import { FEATURES_CONFIG, FeatureShowcaseConfig } from '../features.config';
import { ScrollService } from '../../../shell/scroll.service';

let intersectionCallback: IntersectionObserverCallback;
let observedElements: Element[] = [];

class MockIntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    intersectionCallback = callback;
    observedElements = [];
  }
  observe(el: Element): void {
    observedElements.push(el);
  }
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
  get root(): Element | null { return null; }
  get rootMargin(): string { return ''; }
  get thresholds(): readonly number[] { return []; }
}

function triggerIntersection(element: Element): void {
  intersectionCallback(
    [{ isIntersecting: true, target: element } as IntersectionObserverEntry],
    {} as IntersectionObserver,
  );
}

@Component({
  standalone: true,
  imports: [FeatureShowcaseSectionComponent],
  template: `
    <gos-feature-showcase-section
      [config]="config()"
      [showTabNav]="showTabNav()"
      [showSectionHeader]="showSectionHeader()" />
  `,
})
class TestHost {
  config = signal<FeatureShowcaseConfig>(FEATURES_CONFIG);
  showTabNav = signal(true);
  showSectionHeader = signal(true);
}

describe('FeatureShowcaseSectionComponent', () => {
  let fixture: ComponentFixture<TestHost>;
  let el: HTMLElement;
  let scrollService: ScrollService;

  beforeEach(async () => {
    (globalThis as Record<string, unknown>)['IntersectionObserver'] = MockIntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    scrollService = TestBed.inject(ScrollService);
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  afterEach(() => {
    delete (globalThis as Record<string, unknown>)['IntersectionObserver'];
  });

  it('should render section header', () => {
    expect(el.querySelector('gos-section-header')).toBeTruthy();
  });

  it('should render 7 feature modules', () => {
    const modules = el.querySelectorAll('gos-feature-module');
    expect(modules.length).toBe(7);
  });

  it('should alternate reversed layout', () => {
    const modules = el.querySelectorAll('gos-feature-module');
    const firstArticle = modules[0].querySelector('article');
    const secondArticle = modules[1].querySelector('article');
    expect(firstArticle?.classList.contains('feature-module--reversed')).toBe(false);
    expect(secondArticle?.classList.contains('feature-module--reversed')).toBe(true);
  });

  it('should render tab nav', () => {
    expect(el.querySelector('gos-feature-tab-nav')).toBeTruthy();
  });

  it('should hide tab nav when showTabNav is false', () => {
    fixture.componentInstance.showTabNav.set(false);
    fixture.detectChanges();
    expect(el.querySelector('gos-feature-tab-nav')).toBeFalsy();
  });

  it('should hide section header when showSectionHeader is false', () => {
    fixture.componentInstance.showSectionHeader.set(false);
    fixture.detectChanges();
    expect(el.querySelector('gos-section-header')).toBeFalsy();
  });

  it('should have id="features" for deep linking', () => {
    expect(el.querySelector('#features')).toBeTruthy();
  });

  it('should call scrollService.scrollToElement on tab select', () => {
    const spy = vi.spyOn(scrollService, 'scrollToElement');
    const component = fixture.debugElement.children[0].componentInstance as FeatureShowcaseSectionComponent;
    component.onTabSelected('pos');
    expect(spy).toHaveBeenCalledWith('feature-pos', 140);
  });
});
