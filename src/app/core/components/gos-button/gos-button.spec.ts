import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GosButtonComponent } from './gos-button';

describe('GosButtonComponent', () => {
  let fixture: ComponentFixture<GosButtonComponent>;
  let component: GosButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GosButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GosButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to primary variant and md size', () => {
    expect(component.variant()).toBe('primary');
    expect(component.size()).toBe('md');
  });

  it('should disable button when loading', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it('should not emit clicked when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    let emitted = false;
    component.clicked.subscribe(() => emitted = true);

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();
    expect(emitted).toBe(false);
  });
});
