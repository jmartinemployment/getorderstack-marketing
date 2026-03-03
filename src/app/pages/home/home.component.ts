import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroBackgroundComponent } from './hero-background/hero-background';
import { HeroSectionComponent } from './hero-section/hero-section';
import { ProductMockupComponent } from './product-mockup/product-mockup';
import { TrustStripComponent } from './trust-strip/trust-strip';
import { PainPointsSectionComponent } from './pain-points/pain-points-section/pain-points-section';
import { FeatureShowcaseSectionComponent } from '../features/feature-showcase-section/feature-showcase-section';

@Component({
  selector: 'gos-home-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroBackgroundComponent,
    HeroSectionComponent,
    ProductMockupComponent,
    TrustStripComponent,
    PainPointsSectionComponent,
    FeatureShowcaseSectionComponent,
  ],
  template: `
    <gos-hero-background>
      <gos-hero-section />
      <gos-product-mockup />
      <gos-trust-strip />
    </gos-hero-background>
    <gos-pain-points-section />
    <gos-feature-showcase-section
      [showTabNav]="false"
      [showSectionHeader]="true" />
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class HomeComponent {}
