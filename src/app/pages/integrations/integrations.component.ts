import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GosContainerComponent, GosSectionHeaderComponent } from '../../core/components';

@Component({
  selector: 'gos-integrations-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GosContainerComponent, GosSectionHeaderComponent],
  template: `
    <gos-container>
      <gos-section-header
        eyebrow="Coming Soon"
        title="Integrations"
        subtitle="This page will be built in component C-09." />
    </gos-container>
  `,
  styles: [`:host { display: block; padding-top: 120px; min-height: 60vh; }`],
})
export class IntegrationsComponent {}
