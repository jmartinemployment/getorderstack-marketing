import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'gos-container',
  standalone: true,
  template: `<ng-content />`,
  styleUrl: './gos-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'style': 'display: block',
    '[class.gos-container--narrow]': 'narrow()',
  },
})
export class GosContainerComponent {
  readonly narrow = input(false);
}
