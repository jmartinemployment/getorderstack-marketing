import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gos-product-mockup',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
  templateUrl: './product-mockup.html',
  styleUrl: './product-mockup.scss',
})
export class ProductMockupComponent {}
