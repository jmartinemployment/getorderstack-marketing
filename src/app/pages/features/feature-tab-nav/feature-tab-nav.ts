import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FeatureModule } from '../features.config';

@Component({
  selector: 'gos-feature-tab-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
  templateUrl: './feature-tab-nav.html',
  styleUrl: './feature-tab-nav.scss',
})
export class FeatureTabNavComponent {
  readonly features = input.required<FeatureModule[]>();
  readonly activeId = input('');
  readonly tabSelected = output<string>();
}
