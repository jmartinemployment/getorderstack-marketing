import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { MobileNavComponent } from './mobile-nav.component';

describe('MobileNavComponent', () => {
  let fixture: ComponentFixture<MobileNavComponent>;
  let component: MobileNavComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render drawer when isOpen is false', () => {
    const drawer = fixture.nativeElement.querySelector('.mobile-nav');
    expect(drawer).toBeNull();
  });

  it('should render nav items when isOpen is true', () => {
    fixture.componentRef.setInput('isOpen', true);
    fixture.detectChanges();

    const links = fixture.nativeElement.querySelectorAll('.mobile-nav__link');
    expect(links.length).toBe(5);
    expect(links[0].textContent.trim()).toBe('Features');
  });

  it('should emit closed when overlay is clicked', () => {
    fixture.componentRef.setInput('isOpen', true);
    fixture.detectChanges();

    let emitted = false;
    component.closed.subscribe(() => emitted = true);

    const overlay = fixture.nativeElement.querySelector('.mobile-nav__overlay') as HTMLElement;
    overlay.click();
    expect(emitted).toBe(true);
  });

  it('should emit closed when a nav link is clicked', () => {
    fixture.componentRef.setInput('isOpen', true);
    fixture.detectChanges();

    let emitted = false;
    component.closed.subscribe(() => emitted = true);

    const link = fixture.nativeElement.querySelector('.mobile-nav__link') as HTMLAnchorElement;
    link.click();
    expect(emitted).toBe(true);
  });

  it('should emit closed on Escape key', () => {
    fixture.componentRef.setInput('isOpen', true);
    fixture.detectChanges();

    let emitted = false;
    component.closed.subscribe(() => emitted = true);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(emitted).toBe(true);
  });

  it('should render CTA button with full width', () => {
    fixture.componentRef.setInput('isOpen', true);
    fixture.detectChanges();

    const cta = fixture.nativeElement.querySelector('.mobile-nav__cta gos-button');
    expect(cta).toBeTruthy();
    expect(cta.textContent.trim()).toBe('Get Started Free');
  });

  it('should lock body scroll when open', () => {
    fixture.componentRef.setInput('isOpen', true);
    fixture.detectChanges();

    expect(document.body.style.position).toBe('fixed');
  });

  it('should restore body scroll when closed', () => {
    fixture.componentRef.setInput('isOpen', true);
    fixture.detectChanges();

    fixture.componentRef.setInput('isOpen', false);
    fixture.detectChanges();

    expect(document.body.style.position).toBe('');
  });
});
