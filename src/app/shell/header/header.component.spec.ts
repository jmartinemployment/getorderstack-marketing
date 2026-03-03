import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo linking to home', () => {
    const logo = fixture.nativeElement.querySelector('.header__logo') as HTMLAnchorElement;
    expect(logo).toBeTruthy();
    expect(logo.textContent).toContain('GetOrderStack');
  });

  it('should render all nav items', () => {
    const links = fixture.nativeElement.querySelectorAll('.header__nav-link');
    expect(links.length).toBe(5);
    expect(links[0].textContent.trim()).toBe('Features');
  });

  it('should render CTA button', () => {
    const cta = fixture.nativeElement.querySelector('.header__actions gos-button');
    expect(cta).toBeTruthy();
    expect(cta.textContent.trim()).toBe('Get Started Free');
  });

  it('should apply transparent class when transparent input is true and not scrolled', () => {
    fixture.componentRef.setInput('transparent', true);
    component.isScrolled.set(false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('header--transparent')).toBe(true);
  });

  it('should remove transparent class when scrolled', () => {
    fixture.componentRef.setInput('transparent', true);
    component.isScrolled.set(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('header--transparent')).toBe(false);
    expect(fixture.nativeElement.classList.contains('header--scrolled')).toBe(true);
  });

  it('should update aria-expanded when mobile menu is toggled', () => {
    const hamburger = fixture.nativeElement.querySelector('.header__hamburger') as HTMLButtonElement;
    expect(hamburger.getAttribute('aria-expanded')).toBe('false');

    component.mobileMenuOpen.set(true);
    fixture.detectChanges();
    expect(hamburger.getAttribute('aria-expanded')).toBe('true');
  });

  it('should render hamburger button with aria-controls', () => {
    const hamburger = fixture.nativeElement.querySelector('.header__hamburger') as HTMLButtonElement;
    expect(hamburger.getAttribute('aria-controls')).toBe('mobile-nav');
    expect(hamburger.getAttribute('aria-label')).toBe('Toggle navigation menu');
  });
});
