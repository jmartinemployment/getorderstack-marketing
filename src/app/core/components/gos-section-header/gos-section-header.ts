import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SectionAlignment } from '../../models/types';

@Component({
  selector: 'gos-section-header',
  standalone: true,
  templateUrl: './gos-section-header.html',
  styleUrl: './gos-section-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'style': 'display: block',
    '[class]': '"gos-section-header gos-section-header--" + align()',
  },
})
export class GosSectionHeaderComponent {
  readonly eyebrow = input('');
  readonly title = input('');
  readonly subtitle = input('');
  readonly align = input<SectionAlignment>('left');
}
