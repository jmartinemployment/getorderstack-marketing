import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GosButtonComponent } from '../../core/components';
import { BreakpointService } from '../../core/services/breakpoint.service';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { NAV_ITEMS, NAV_CTA, NavItem } from '../nav.model';

@Component({
  selector: 'gos-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, GosButtonComponent, MobileNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'style': 'display: block',
    '[class.header--scrolled]': 'isScrolled()',
    '[class.header--transparent]': 'transparent() && !isScrolled()',
    '[class.header--with-announcement]': 'announcementVisible()',
  },
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  readonly transparent = input(true);
  readonly announcementVisible = input(true);

  readonly breakpoint = inject(BreakpointService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly isScrolled = signal(false);
  readonly mobileMenuOpen = signal(false);

  readonly navItems: NavItem[] = NAV_ITEMS;
  readonly cta: NavItem = NAV_CTA;

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const sentinel = document.getElementById('scroll-sentinel');
    if (!sentinel) return;

    this.observer = new IntersectionObserver(
      ([entry]) => this.isScrolled.set(!entry.isIntersecting),
      { threshold: 0 },
    );
    this.observer.observe(sentinel);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
