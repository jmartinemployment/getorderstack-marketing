import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GosContainerComponent, GosSectionHeaderComponent } from '../../core/components';

@Component({
  selector: 'gos-home-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GosContainerComponent, GosSectionHeaderComponent],
  template: `
    <div class="hero">
      <gos-container>
        <gos-section-header
          eyebrow="Restaurant Operating System"
          title="Run your restaurant, not your software"
          subtitle="POS, ordering, inventory, labor, and analytics — all in one platform built for South Florida restaurants."
          align="center" />
      </gos-container>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--gos-secondary);
      padding-top: 120px;
      padding-bottom: var(--gos-space-16);
    }
    :host ::ng-deep .gos-section-header__title { color: var(--gos-white); }
    :host ::ng-deep .gos-section-header__subtitle { color: var(--gos-gray-400); }
    :host ::ng-deep .gos-section-header__eyebrow { color: var(--gos-primary); }
  `],
})
export class HomeComponent {}
