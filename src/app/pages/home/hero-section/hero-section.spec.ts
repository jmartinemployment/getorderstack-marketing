import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeroSectionComponent } from './hero-section';
import { HERO } from '../hero.config';

describe('HeroSectionComponent', () => {
  let fixture: ComponentFixture<HeroSectionComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render eyebrow text', () => {
    const eyebrow = el.querySelector('.hero-section__eyebrow');
    expect(eyebrow?.textContent?.trim()).toBe(HERO.eyebrow);
  });

  it('should render headline with highlight', () => {
    const headline = el.querySelector('.hero-section__headline');
    expect(headline?.textContent).toContain(HERO.headlineBefore);
    const highlight = el.querySelector('.hero-section__highlight');
    expect(highlight?.textContent?.trim()).toBe(HERO.headlineHighlight);
  });

  it('should render subtitle', () => {
    const subtitle = el.querySelector('.hero-section__subtitle');
    expect(subtitle?.textContent?.trim()).toBe(HERO.subtitle);
  });

  it('should render two CTA buttons', () => {
    const ctas = el.querySelectorAll('.hero-section__cta-link');
    expect(ctas.length).toBe(2);
  });

  it('should render all stats', () => {
    const stats = el.querySelectorAll('.hero-section__stat');
    expect(stats.length).toBe(HERO.stats.length);
  });

  it('should display correct stat values', () => {
    const values = el.querySelectorAll('.hero-section__stat-value');
    HERO.stats.forEach((stat, i) => {
      expect(values[i]?.textContent?.trim()).toBe(stat.value);
    });
  });
});
