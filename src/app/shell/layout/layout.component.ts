import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { GosContainerComponent } from '../../core/components';
import { HeaderComponent } from '../header/header.component';
import { AnnouncementBarComponent } from '../announcement-bar/announcement-bar.component';
import { ANNOUNCEMENT } from '../nav.model';

@Component({
  selector: 'gos-layout',
  standalone: true,
  imports: [RouterOutlet, GosContainerComponent, HeaderComponent, AnnouncementBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
})
export class LayoutComponent {
  private readonly router = inject(Router);

  readonly announcementVisible = signal(true);
  readonly announcement = ANNOUNCEMENT;

  isHeroPage(): boolean {
    return this.router.url === '/' || this.router.url === '';
  }

  onAnnouncementDismissed(): void {
    this.announcementVisible.set(false);
  }
}
