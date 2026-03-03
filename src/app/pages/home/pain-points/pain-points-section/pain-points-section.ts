import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GosContainerComponent, GosSectionHeaderComponent } from '../../../../core/components';
import { ScrollRevealDirective } from '../../../../shared/directives';
import { PainPointCardComponent } from '../pain-point-card/pain-point-card';
import { BridgeCtaComponent } from '../bridge-cta/bridge-cta';
import { PainPointsConfig, PAIN_POINTS_DEFAULT } from '../pain-points.config';

@Component({
  selector: 'gos-pain-points-section',
  standalone: true,
  imports: [
    GosContainerComponent,
    GosSectionHeaderComponent,
    ScrollRevealDirective,
    PainPointCardComponent,
    BridgeCtaComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
  templateUrl: './pain-points-section.html',
  styleUrl: './pain-points-section.scss',
})
export class PainPointsSectionComponent {
  readonly config = input<PainPointsConfig>(PAIN_POINTS_DEFAULT);
}
