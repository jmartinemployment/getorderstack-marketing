import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GosButtonComponent } from '../../../../core/components';
import { BridgeConfig, PAIN_POINTS_DEFAULT } from '../pain-points.config';

@Component({
  selector: 'gos-bridge-cta',
  standalone: true,
  imports: [RouterLink, GosButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
  templateUrl: './bridge-cta.html',
  styleUrl: './bridge-cta.scss',
})
export class BridgeCtaComponent {
  readonly config = input<BridgeConfig>(PAIN_POINTS_DEFAULT.bridge);
}
