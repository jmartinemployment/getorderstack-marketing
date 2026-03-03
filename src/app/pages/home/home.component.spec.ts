import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render hero background', () => {
    const bg = el.querySelector('gos-hero-background');
    expect(bg).toBeTruthy();
  });

  it('should render hero section', () => {
    const section = el.querySelector('gos-hero-section');
    expect(section).toBeTruthy();
  });

  it('should render product mockup', () => {
    const mockup = el.querySelector('gos-product-mockup');
    expect(mockup).toBeTruthy();
  });

  it('should render trust strip', () => {
    const trust = el.querySelector('gos-trust-strip');
    expect(trust).toBeTruthy();
  });
});
