import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gos-hero-background',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
  template: `
    <div class="hero-bg">
      <div class="hero-bg__gradient"></div>
      <div class="hero-bg__grid"></div>
      <div class="hero-bg__orb hero-bg__orb--1"></div>
      <div class="hero-bg__orb hero-bg__orb--2"></div>
      <ng-content />
    </div>
  `,
  styleUrl: './hero-background.scss',
})
export class HeroBackgroundComponent {}
