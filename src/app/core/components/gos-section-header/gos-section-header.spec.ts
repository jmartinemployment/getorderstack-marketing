import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GosSectionHeaderComponent } from './gos-section-header';

describe('GosSectionHeaderComponent', () => {
  let fixture: ComponentFixture<GosSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GosSectionHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GosSectionHeaderComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should default to left alignment', () => {
    expect(fixture.componentInstance.align()).toBe('left');
  });

  it('should render title when set', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Test Title');
  });

  it('should render eyebrow when set', () => {
    fixture.componentRef.setInput('eyebrow', 'FEATURES');
    fixture.detectChanges();
    const eyebrow = fixture.nativeElement.querySelector('.gos-section-header__eyebrow');
    expect(eyebrow.textContent).toContain('FEATURES');
  });
});
