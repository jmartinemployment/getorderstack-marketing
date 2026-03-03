import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Renderer2,
  inject,
  PLATFORM_ID,
  input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[gosScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  readonly revealClass = input<string>('is-revealed', { alias: 'gosScrollReveal' });
  readonly threshold = input<number>(0.15, { alias: 'gosScrollRevealThreshold' });
  readonly delay = input<number>(0, { alias: 'gosScrollRevealDelay' });
  readonly once = input<boolean>(true, { alias: 'gosScrollRevealOnce' });

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  private observer?: IntersectionObserver;

  private getRevealClass(): string {
    return this.revealClass() || 'is-revealed';
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(this.el.nativeElement, this.getRevealClass());
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(this.el.nativeElement, this.getRevealClass());
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delayMs = this.delay();
          if (delayMs > 0) {
            setTimeout(() => this.reveal(), delayMs);
          } else {
            this.reveal();
          }

          if (this.once()) {
            this.observer?.disconnect();
          }
        } else if (!this.once()) {
          this.renderer.removeClass(this.el.nativeElement, this.getRevealClass());
        }
      },
      { threshold: this.threshold() },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private reveal(): void {
    this.renderer.addClass(this.el.nativeElement, this.getRevealClass());
  }
}
