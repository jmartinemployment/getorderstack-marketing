import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GosInputComponent } from './gos-input';

describe('GosInputComponent', () => {
  let fixture: ComponentFixture<GosInputComponent>;
  let component: GosInputComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GosInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GosInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should write value', () => {
    component.writeValue('hello');
    expect(component.value()).toBe('hello');
  });

  it('should handle null value', () => {
    component.writeValue(null as unknown as string);
    expect(component.value()).toBe('');
  });

  it('should set aria-invalid when error is present', () => {
    fixture.componentRef.setInput('error', 'Required field');
    fixture.componentRef.setInput('inputId', 'test-input');
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });
});
