import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, signal } from '@angular/core';
import { FeatureVisualComponent } from './feature-visual';
import { FeatureVisualType, FeatureAccent } from '../features.config';

@Component({
  standalone: true,
  imports: [FeatureVisualComponent],
  template: `<gos-feature-visual [type]="type()" [accent]="accent()" />`,
})
class TestHost {
  type = signal<FeatureVisualType>('pos-terminal');
  accent = signal<FeatureAccent>('primary');
}

describe('FeatureVisualComponent', () => {
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

  it('should render with aria-hidden', () => {
    const visual = el.querySelector('.feature-visual');
    expect(visual?.getAttribute('aria-hidden')).toBe('true');
  });

  it('should apply accent color class', () => {
    expect(el.querySelector('.feature-visual--primary')).toBeTruthy();
  });

  it('should render pos-terminal visual', () => {
    expect(el.querySelector('.fv-pos')).toBeTruthy();
  });

  it('should render kds-display visual', () => {
    fixture.componentInstance.type.set('kds-display');
    fixture.detectChanges();
    expect(el.querySelector('.fv-kds')).toBeTruthy();
  });

  it('should render delivery-map visual', () => {
    fixture.componentInstance.type.set('delivery-map');
    fixture.detectChanges();
    expect(el.querySelector('.fv-delivery')).toBeTruthy();
  });

  it('should render payment-flow visual', () => {
    fixture.componentInstance.type.set('payment-flow');
    fixture.detectChanges();
    expect(el.querySelector('.fv-payment')).toBeTruthy();
  });

  it('should render menu-builder visual', () => {
    fixture.componentInstance.type.set('menu-builder');
    fixture.detectChanges();
    expect(el.querySelector('.fv-menu')).toBeTruthy();
  });

  it('should render analytics-dashboard visual', () => {
    fixture.componentInstance.type.set('analytics-dashboard');
    fixture.detectChanges();
    expect(el.querySelector('.fv-analytics')).toBeTruthy();
  });

  it('should render ai-insights visual', () => {
    fixture.componentInstance.type.set('ai-insights');
    fixture.detectChanges();
    expect(el.querySelector('.fv-ai')).toBeTruthy();
  });

  it('should switch accent color class', () => {
    fixture.componentInstance.accent.set('success');
    fixture.detectChanges();
    expect(el.querySelector('.feature-visual--success')).toBeTruthy();
    expect(el.querySelector('.feature-visual--primary')).toBeFalsy();
  });
});
