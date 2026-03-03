import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, signal } from '@angular/core';
import { FeatureTabNavComponent } from './feature-tab-nav';
import { FeatureModule } from '../features.config';

const MOCK_FEATURES: FeatureModule[] = [
  {
    id: 'pos', tag: 'Core', title: 'POS', description: 'desc',
    bullets: [], ctaText: 'Learn', ctaRoute: '/features',
    visualType: 'pos-terminal', accentColor: 'primary',
  },
  {
    id: 'kds', tag: 'Kitchen', title: 'KDS', description: 'desc',
    bullets: [], ctaText: 'Learn', ctaRoute: '/features',
    visualType: 'kds-display', accentColor: 'primary',
  },
  {
    id: 'delivery', tag: 'Delivery', title: 'Delivery', description: 'desc',
    bullets: [], ctaText: 'Learn', ctaRoute: '/pricing',
    visualType: 'delivery-map', accentColor: 'success',
  },
];

@Component({
  standalone: true,
  imports: [FeatureTabNavComponent],
  template: `
    <gos-feature-tab-nav
      [features]="features()"
      [activeId]="activeId()"
      (tabSelected)="selected = $event" />
  `,
})
class TestHost {
  features = signal(MOCK_FEATURES);
  activeId = signal('pos');
  selected = '';
}

describe('FeatureTabNavComponent', () => {
  let fixture: ComponentFixture<TestHost>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should render one tab per feature', () => {
    const tabs = el.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBe(3);
  });

  it('should mark active tab with --active class', () => {
    const activeTab = el.querySelector('.feature-tabs__tab--active');
    expect(activeTab?.textContent?.trim()).toBe('Core');
  });

  it('should set aria-selected on active tab', () => {
    const tabs = el.querySelectorAll('[role="tab"]');
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('aria-selected')).toBe('false');
  });

  it('should emit tabSelected on click', () => {
    const tabs = el.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    tabs[1].click();
    expect(fixture.componentInstance.selected).toBe('kds');
  });

  it('should have tablist role on nav', () => {
    expect(el.querySelector('[role="tablist"]')).toBeTruthy();
  });

  it('should update active tab when activeId changes', () => {
    fixture.componentInstance.activeId.set('delivery');
    fixture.detectChanges();
    const activeTab = el.querySelector('.feature-tabs__tab--active');
    expect(activeTab?.textContent?.trim()).toBe('Delivery');
  });
});
