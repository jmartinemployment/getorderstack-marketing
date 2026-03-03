import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PainPoint } from '../pain-points.config';

@Component({
  selector: 'gos-pain-point-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
  templateUrl: './pain-point-card.html',
  styleUrl: './pain-point-card.scss',
})
export class PainPointCardComponent {
  readonly painPoint = input.required<PainPoint>();
}
