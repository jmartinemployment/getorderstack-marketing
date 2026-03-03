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
import { GosContainerComponent, GosSectionHeaderComponent } from '../../../core/components';
import { ScrollRevealDirective } from '../../../shared/directives';
import { ScrollService } from '../../../shell/scroll.service';
import { FeatureTabNavComponent } from '../feature-tab-nav/feature-tab-nav';
import { FeatureModuleComponent } from '../feature-module/feature-module';
import { FeatureShowcaseConfig, FEATURES_CONFIG } from '../features.config';

@Component({
  selector: 'gos-feature-showcase-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    GosContainerComponent,
    GosSectionHeaderComponent,
    ScrollRevealDirective,
    FeatureTabNavComponent,
    FeatureModuleComponent,
  ],
  host: { 'style': 'display: block' },
  templateUrl: './feature-showcase-section.html',
  styleUrl: './feature-showcase-section.scss',
})
export class FeatureShowcaseSectionComponent implements AfterViewInit, OnDestroy {
  readonly config = input<FeatureShowcaseConfig>(FEATURES_CONFIG);
  readonly showTabNav = input(true);
  readonly showSectionHeader = input(true);

  readonly activeFeatureId = signal('');

  private readonly scrollService = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);
  private featureObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof IntersectionObserver === 'undefined') return;

    this.featureObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replaceAll('feature-', '');
            this.activeFeatureId.set(id);
          }
        }
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      },
    );

    const modules = document.querySelectorAll('[id^="feature-"]');
    modules.forEach((el) => this.featureObserver?.observe(el));
  }

  ngOnDestroy(): void {
    this.featureObserver?.disconnect();
  }

  onTabSelected(featureId: string): void {
    this.scrollService.scrollToElement(`feature-${featureId}`, 140);
  }
}
