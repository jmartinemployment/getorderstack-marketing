import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  GosButtonComponent,
  GosCardComponent,
  GosInputComponent,
  GosBadgeComponent,
  GosContainerComponent,
  GosSectionHeaderComponent,
} from './core/components';

@Component({
  selector: 'gos-root',
  standalone: true,
  imports: [
    GosButtonComponent,
    GosCardComponent,
    GosInputComponent,
    GosBadgeComponent,
    GosContainerComponent,
    GosSectionHeaderComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
