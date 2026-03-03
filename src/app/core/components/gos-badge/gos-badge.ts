import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BadgeVariant, BadgeSize } from '../../models/types';

@Component({
  selector: 'gos-badge',
  standalone: true,
  templateUrl: './gos-badge.html',
  styleUrl: './gos-badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'style': 'display: inline-block',
    '[class]': '"gos-badge gos-badge--" + variant() + " gos-badge--" + size()',
  },
})
export class GosBadgeComponent {
  readonly variant = input<BadgeVariant>('primary');
  readonly size = input<BadgeSize>('md');
}
