import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BridgeCtaComponent } from './bridge-cta';
import { PAIN_POINTS_DEFAULT } from '../pain-points.config';

describe('BridgeCtaComponent', () => {
  let fixture: ComponentFixture<BridgeCtaComponent>;
  let el: HTMLElement;

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

  it('should render headline from config', () => {
    const headline = el.querySelector('.bridge__headline');
    expect(headline?.textContent?.trim()).toBe(PAIN_POINTS_DEFAULT.bridge.headline);
  });

  it('should render subtext from config', () => {
    const subtext = el.querySelector('.bridge__subtext');
    expect(subtext?.textContent?.trim()).toBe(PAIN_POINTS_DEFAULT.bridge.subtext);
  });

  it('should render CTA button', () => {
    const button = el.querySelector('gos-button');
    expect(button).toBeTruthy();
  });

  it('should link to configured route', () => {
    const link = el.querySelector('.bridge__cta-link');
    expect(link).toBeTruthy();
  });

  it('should render arrow with aria-hidden', () => {
    const arrow = el.querySelector('.bridge__arrow');
    expect(arrow?.getAttribute('aria-hidden')).toBe('true');
  });

  it('should render SVG arrow', () => {
    const svg = el.querySelector('.bridge__arrow svg');
    expect(svg).toBeTruthy();
  });
});
