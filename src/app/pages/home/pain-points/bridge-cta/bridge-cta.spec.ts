import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BridgeCtaComponent } from './bridge-cta';
import { PAIN_POINTS_DEFAULT } from '../pain-points.config';

describe('BridgeCtaComponent', () => {
  let fixture: ComponentFixture<BridgeCtaComponent>;
  let el: HTMLElement;
  const bridge = PAIN_POINTS_DEFAULT.bridge;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridgeCtaComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BridgeCtaComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render headline', () => {
    const headline = el.querySelector('.bridge__headline');
    expect(headline?.textContent?.trim()).toBe(bridge.headline);
  });

  it('should render subtext', () => {
    const subtext = el.querySelector('.bridge__subtext');
    expect(subtext?.textContent?.trim()).toBe(bridge.subtext);
  });

  it('should render CTA button with label', () => {
    const btn = el.querySelector('gos-button');
    expect(btn?.textContent?.trim()).toBe(bridge.ctaLabel);
  });

  it('should link to configured route', () => {
    const link = el.querySelector('.bridge__cta-link') as HTMLAnchorElement;
    expect(link).toBeTruthy();
  });

  it('should render arrow with aria-hidden', () => {
    const arrow = el.querySelector('.bridge__arrow');
    expect(arrow?.getAttribute('aria-hidden')).toBe('true');
  });

  it('should have complementary role', () => {
    const bridge = el.querySelector('[role="complementary"]');
    expect(bridge).toBeTruthy();
  });
});
