import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GosContainerComponent, GosSectionHeaderComponent } from '../../core/components';
import { FeatureShowcaseSectionComponent } from './feature-showcase-section/feature-showcase-section';
import { FEATURES_CONFIG } from './features.config';

@Component({
  selector: 'gos-features-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GosContainerComponent, GosSectionHeaderComponent, FeatureShowcaseSectionComponent],
  template: `
    <section class="features-hero">
      <gos-container>
        <gos-section-header
          eyebrow="Platform"
          title="Every Tool Your Restaurant Needs"
          subtitle="Seven integrated modules. One platform. Zero compromises."
          align="center" />
      </gos-container>
    </section>

    <gos-feature-showcase-section
      [config]="config"
      [showSectionHeader]="false"
      [showTabNav]="true" />
  `,
  styles: [`
    :host { display: block; }

    .features-hero {
      padding-top: calc(72px + var(--gos-space-16));
      padding-bottom: var(--gos-space-12);
      background: var(--gos-gray-50);

      @media (max-width: 1023px) {
        padding-top: calc(64px + var(--gos-space-12));
      }
    }
  `],
})
export class FeaturesComponent {
  readonly config = FEATURES_CONFIG;
}
