import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GosBadgeComponent } from '../../../core/components';
import { BadgeVariant } from '../../../core/models/types';
import { ScrollRevealDirective } from '../../../shared/directives';
import { FeatureVisualComponent } from '../feature-visual/feature-visual';
import { FeatureModule, FeatureAccent } from '../features.config';

@Component({
  selector: 'gos-feature-module',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, GosBadgeComponent, ScrollRevealDirective, FeatureVisualComponent],
  host: { 'style': 'display: block' },
  templateUrl: './feature-module.html',
  styleUrl: './feature-module.scss',
})
export class FeatureModuleComponent {
  readonly feature = input.required<FeatureModule>();
  readonly reversed = input(false);
  readonly index = input(0);

  readonly badgeVariant = computed<BadgeVariant>(() => {
    const map: Record<FeatureAccent, BadgeVariant> = {
      primary: 'primary',
      success: 'success',
      info: 'info',
      secondary: 'secondary',
    };
    return map[this.feature().accentColor] ?? 'primary';
  });
}
