import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrustStripComponent } from './trust-strip';
import { HERO } from '../hero.config';

describe('TrustStripComponent', () => {
  let fixture: ComponentFixture<TrustStripComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustStripComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrustStripComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render heading', () => {
    const heading = el.querySelector('.trust-strip__heading');
    expect(heading?.textContent?.trim()).toBe(HERO.trustHeading);
  });

  it('should render all logos', () => {
    const logos = el.querySelectorAll('.trust-strip__logo');
    expect(logos.length).toBe(HERO.trustLogos.length);
  });

  it('should display logo names', () => {
    const logoTexts = el.querySelectorAll('.trust-strip__logo-text');
    HERO.trustLogos.forEach((name, i) => {
      expect(logoTexts[i]?.textContent?.trim()).toBe(name);
    });
  });
});
