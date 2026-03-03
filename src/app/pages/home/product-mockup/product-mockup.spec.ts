import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductMockupComponent } from './product-mockup';

describe('ProductMockupComponent', () => {
  let fixture: ComponentFixture<ProductMockupComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMockupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductMockupComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render window chrome with three dots', () => {
    const dots = el.querySelectorAll('.mockup__dot');
    expect(dots.length).toBe(3);
  });

  it('should render toolbar title', () => {
    const title = el.querySelector('.mockup__toolbar-title');
    expect(title?.textContent?.trim()).toBe('OrderStack Dashboard');
  });

  it('should render three metric cards', () => {
    const cards = el.querySelectorAll('.mockup__metric-card');
    expect(cards.length).toBe(3);
  });

  it('should render chart bars', () => {
    const bars = el.querySelectorAll('.mockup__bar');
    expect(bars.length).toBe(7);
  });

  it('should render sidebar nav items', () => {
    const items = el.querySelectorAll('.mockup__nav-item');
    expect(items.length).toBe(5);
  });
});
