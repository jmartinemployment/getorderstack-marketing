import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardVariant } from '../../models/types';

@Component({
  selector: 'gos-card',
  standalone: true,
  templateUrl: './gos-card.html',
  styleUrl: './gos-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'style': 'display: block',
    '[class]': '"gos-card gos-card--" + variant()',
    '[class.gos-card--hoverable]': 'hoverable()',
    '[class.gos-card--clickable]': 'clickable()',
    '[attr.role]': 'clickable() ? "button" : null',
    '[attr.tabindex]': 'clickable() ? 0 : null',
  },
})
export class GosCardComponent {
  readonly variant = input<CardVariant>('elevated');
  readonly hoverable = input(false);
  readonly clickable = input(false);
}
