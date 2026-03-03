import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FeatureVisualType, FeatureAccent } from '../features.config';

@Component({
  selector: 'gos-feature-visual',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
  templateUrl: './feature-visual.html',
  styleUrl: './feature-visual.scss',
})
export class FeatureVisualComponent {
  readonly type = input.required<FeatureVisualType>();
  readonly accent = input<FeatureAccent>('primary');

  readonly posItems = Array(9).fill(0);
  readonly kdsTickets = [
    { status: 'green', items: [0, 0] },
    { status: 'yellow', items: [0, 0, 0] },
    { status: 'red', items: [0, 0] },
    { status: 'green', items: [0] },
  ];
  readonly deliveryPins = [
    { x: 30, y: 25 }, { x: 65, y: 40 }, { x: 45, y: 70 }, { x: 75, y: 20 },
  ];
  readonly menuCategories = Array(5).fill(0);
  readonly menuItems = Array(4).fill(0);
  readonly analyticStats = Array(3).fill(0);
}
