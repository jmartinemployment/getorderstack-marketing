import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroBackgroundComponent } from './hero-background/hero-background';
import { HeroSectionComponent } from './hero-section/hero-section';
import { ProductMockupComponent } from './product-mockup/product-mockup';
import { TrustStripComponent } from './trust-strip/trust-strip';

@Component({
  selector: 'gos-home-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroBackgroundComponent,
    HeroSectionComponent,
    ProductMockupComponent,
    TrustStripComponent,
  ],
  template: `
    <gos-hero-background>
      <gos-hero-section />
      <gos-product-mockup />
      <gos-trust-strip />
    </gos-hero-background>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class HomeComponent {}
