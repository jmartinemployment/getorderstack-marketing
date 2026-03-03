import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Renderer2,
  inject,
  PLATFORM_ID,
  input,
  computed,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[gosScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  readonly rawRevealClass = input<string>('', { alias: 'gosScrollReveal' });
  readonly threshold = input<number>(0.15, { alias: 'gosScrollRevealThreshold' });
  readonly delay = input<number>(0, { alias: 'gosScrollRevealDelay' });
  readonly once = input<boolean>(true, { alias: 'gosScrollRevealOnce' });

  readonly revealClass = computed(() => this.rawRevealClass() || 'is-revealed');

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(this.el.nativeElement, this.revealClass());
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(this.el.nativeElement, this.revealClass());
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delayMs = this.delay();
          if (delayMs > 0) {
            this.timeoutId = setTimeout(() => this.reveal(), delayMs);
          } else {
            this.reveal();
          }

          if (this.once()) {
            this.observer?.disconnect();
          }
        } else if (!this.once()) {
          this.renderer.removeClass(this.el.nativeElement, this.revealClass());
        }
      },
      { threshold: this.threshold() },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.timeoutId !== undefined) {
      clearTimeout(this.timeoutId);
    }
  }

  private reveal(): void {
    this.renderer.addClass(this.el.nativeElement, this.revealClass());
  }
}
