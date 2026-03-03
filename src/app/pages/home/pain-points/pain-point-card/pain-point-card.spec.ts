import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, signal } from '@angular/core';
import { PainPointCardComponent } from './pain-point-card';
import { PainPoint } from '../pain-points.config';

const MOCK_POINT: PainPoint = {
  icon: 'commission',
  stat: '15\u201330%',
  statSuffix: 'lost per order',
  headline: 'Test Headline',
  description: 'Test description text.',
  accentColor: 'error',
};

const MOCK_NO_SUFFIX: PainPoint = {
  icon: 'clock',
  stat: '5 min',
  headline: 'No Suffix',
  description: 'No suffix description.',
  accentColor: 'primary',
};

@Component({
  standalone: true,
  imports: [PainPointCardComponent],
  template: '<gos-pain-point-card [painPoint]="point()" />',
})
class TestHost {
  point = signal(MOCK_POINT);
}

describe('PainPointCardComponent', () => {
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

  it('should create', () => {
    expect(el.querySelector('gos-pain-point-card')).toBeTruthy();
  });

  it('should render as article element', () => {
    expect(el.querySelector('article.pain-card')).toBeTruthy();
  });

  it('should apply accent color class', () => {
    expect(el.querySelector('.pain-card--error')).toBeTruthy();
  });

  it('should render icon with correct class', () => {
    expect(el.querySelector('.pain-card__icon--commission')).toBeTruthy();
  });

  it('should render stat value', () => {
    const value = el.querySelector('.pain-card__stat-value');
    expect(value?.textContent?.trim()).toBe('15\u201330%');
  });

  it('should render stat suffix when provided', () => {
    const suffix = el.querySelector('.pain-card__stat-suffix');
    expect(suffix?.textContent?.trim()).toBe('lost per order');
  });

  it('should not render stat suffix when absent', () => {
    fixture.componentInstance.point.set(MOCK_NO_SUFFIX);
    fixture.detectChanges();
    const suffix = el.querySelector('.pain-card__stat-suffix');
    expect(suffix).toBeFalsy();
  });

  it('should render headline', () => {
    const headline = el.querySelector('.pain-card__headline');
    expect(headline?.textContent?.trim()).toBe('Test Headline');
  });

  it('should render description', () => {
    const desc = el.querySelector('.pain-card__description');
    expect(desc?.textContent?.trim()).toBe('Test description text.');
  });
});
