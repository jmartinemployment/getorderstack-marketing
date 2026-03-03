import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnnouncementConfig, ANNOUNCEMENT } from '../nav.model';

@Component({
  selector: 'gos-announcement-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './announcement-bar.component.html',
  styleUrl: './announcement-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
})
export class AnnouncementBarComponent {
  readonly config = input<AnnouncementConfig>(ANNOUNCEMENT);
  readonly dismissed = output<void>();
  readonly isDismissed = signal(false);

  dismiss(): void {
    this.isDismissed.set(true);
    this.dismissed.emit();
  }
}
