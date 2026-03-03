import { ChangeDetectionStrategy, Component, computed, inject, input, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconSize } from '../../models/types';
import { firstValueFrom } from 'rxjs';

const svgCache = new Map<string, string>();

@Component({
  selector: 'gos-icon',
  standalone: true,
  template: `<span [innerHTML]="safeSvg()" [attr.aria-hidden]="!ariaLabel() ? true : null" [attr.aria-label]="ariaLabel() || null" [attr.role]="ariaLabel() ? 'img' : null"></span>`,
  styleUrl: './gos-icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'style': 'display: inline-flex',
    '[class]': '"gos-icon gos-icon--" + size()',
  },
})
export class GosIconComponent {
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);

  readonly name = input.required<string>();
  readonly size = input<IconSize>('md');
  readonly ariaLabel = input('');

  private readonly rawSvg = signal('');

  readonly safeSvg = computed<SafeHtml>(() => {
    const svg = this.rawSvg();
    return svg ? this.sanitizer.bypassSecurityTrustHtml(svg) : '';
  });

  constructor() {
    effect(() => {
      const iconName = this.name();
      if (!iconName) return;

      const path = `assets/icons/${iconName}.svg`;

      if (svgCache.has(path)) {
        this.rawSvg.set(svgCache.get(path)!);
        return;
      }

      firstValueFrom(this.http.get(path, { responseType: 'text' }))
        .then(svg => {
          svgCache.set(path, svg);
          this.rawSvg.set(svg);
        })
        .catch(() => this.rawSvg.set(''));
    });
  }
}
