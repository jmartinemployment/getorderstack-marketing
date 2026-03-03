import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GosButtonComponent, GosContainerComponent } from '../../../core/components';
import { HERO } from '../hero.config';

@Component({
  selector: 'gos-hero-section',
  standalone: true,
  imports: [RouterLink, GosButtonComponent, GosContainerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSectionComponent {
  readonly hero = HERO;
}
