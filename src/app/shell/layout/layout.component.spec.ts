import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let fixture: ComponentFixture<LayoutComponent>;
  let component: LayoutComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render announcement bar', () => {
    const bar = fixture.nativeElement.querySelector('gos-announcement-bar');
    expect(bar).toBeTruthy();
  });

  it('should render header', () => {
    const header = fixture.nativeElement.querySelector('gos-header');
    expect(header).toBeTruthy();
  });

  it('should have scroll sentinel', () => {
    const sentinel = fixture.nativeElement.querySelector('#scroll-sentinel');
    expect(sentinel).toBeTruthy();
  });

  it('should have main content with correct id', () => {
    const main = fixture.nativeElement.querySelector('#main-content');
    expect(main).toBeTruthy();
  });

  it('should hide announcement bar after dismiss', () => {
    component.onAnnouncementDismissed();
    fixture.detectChanges();

    const bar = fixture.nativeElement.querySelector('gos-announcement-bar');
    expect(bar).toBeNull();
    expect(component.announcementVisible()).toBe(false);
  });

  it('should render footer placeholder', () => {
    const footer = fixture.nativeElement.querySelector('.layout__footer-placeholder');
    expect(footer).toBeTruthy();
    expect(footer.textContent).toContain('2026 GetOrderStack');
  });
});
