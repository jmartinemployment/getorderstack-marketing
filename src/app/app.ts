import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from './shell/layout/layout.component';

@Component({
  selector: 'gos-root',
  standalone: true,
  imports: [LayoutComponent],
  template: '<gos-layout />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
