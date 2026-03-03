import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
  output,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GosButtonComponent } from '../../core/components';
import { ScrollService } from '../scroll.service';
import { NAV_ITEMS, NAV_CTA, NavItem } from '../nav.model';

@Component({
  selector: 'gos-mobile-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, GosButtonComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: contents' },
})
export class MobileNavComponent implements OnDestroy {
  readonly isOpen = input(false);
  readonly navItems = input<NavItem[]>(NAV_ITEMS);
  readonly cta = input<NavItem>(NAV_CTA);

  readonly closed = output<void>();

  private readonly elementRef = inject(ElementRef);
  private readonly scrollService = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  private unlockScroll: (() => void) | null = null;
  private previouslyFocused: HTMLElement | null = null;
  private keydownHandler: ((e: KeyboardEvent) => void) | null = null;

  constructor() {
    effect(() => {
      const open = this.isOpen();
      if (!isPlatformBrowser(this.platformId)) return;

      if (open) {
        this.previouslyFocused = document.activeElement as HTMLElement;
        this.unlockScroll = this.scrollService.lockScroll();
        requestAnimationFrame(() => this.trapFocus());
      } else {
        this.releaseFocus();
        if (this.unlockScroll) {
          this.unlockScroll();
          this.unlockScroll = null;
        }
        this.previouslyFocused?.focus();
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) {
      this.closed.emit();
    }
  }

  onOverlayClick(): void {
    this.closed.emit();
  }

  onNavClick(): void {
    this.closed.emit();
  }

  ngOnDestroy(): void {
    this.releaseFocus();
    if (this.unlockScroll) {
      this.unlockScroll();
      this.unlockScroll = null;
    }
  }

  private trapFocus(): void {
    if (typeof document === 'undefined') return;

    const focusable = this.elementRef.nativeElement.querySelectorAll(
      'a[href], button:not([disabled])',
    ) as NodeListOf<HTMLElement>;
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first.focus();

    this.keydownHandler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', this.keydownHandler);
  }

  private releaseFocus(): void {
    if (this.keydownHandler) {
      document.removeEventListener('keydown', this.keydownHandler);
      this.keydownHandler = null;
    }
  }
}
