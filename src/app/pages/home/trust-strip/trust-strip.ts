import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GosContainerComponent } from '../../../core/components';
import { HERO } from '../hero.config';

@Component({
  selector: 'gos-trust-strip',
  standalone: true,
  imports: [GosContainerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
  templateUrl: './trust-strip.html',
  styleUrl: './trust-strip.scss',
})
export class TrustStripComponent {
  readonly heading = HERO.trustHeading;
  readonly logos = HERO.trustLogos;
}
