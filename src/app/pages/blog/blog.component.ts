import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GosContainerComponent, GosSectionHeaderComponent } from '../../core/components';

@Component({
  selector: 'gos-blog-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GosContainerComponent, GosSectionHeaderComponent],
  template: `
    <gos-container>
      <gos-section-header
        eyebrow="Coming Soon"
        title="Blog"
        subtitle="This page will be built in a future component." />
    </gos-container>
  `,
  styles: [`:host { display: block; padding-top: 120px; min-height: 60vh; }`],
})
export class BlogComponent {}
