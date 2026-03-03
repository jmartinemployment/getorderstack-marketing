import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonVariant, ButtonSize } from '../../models/types';

@Component({
  selector: 'gos-button',
  standalone: true,
  templateUrl: './gos-button.html',
  styleUrl: './gos-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'style': 'display: block',
    '[class]': '"gos-btn gos-btn--" + variant() + " gos-btn--" + size()',
    '[class.gos-btn--full]': 'fullWidth()',
    '[class.gos-btn--loading]': 'loading()',
  },
})
export class GosButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly loading = input(false);
  readonly disabled = input(false);
  readonly fullWidth = input(false);
  readonly type = input<'button' | 'submit'>('button');

  readonly clicked = output<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (!this.loading() && !this.disabled()) {
      this.clicked.emit(event);
    }
  }
}
