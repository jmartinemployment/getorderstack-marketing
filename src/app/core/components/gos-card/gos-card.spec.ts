import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GosCardComponent } from './gos-card';

describe('GosCardComponent', () => {
  let fixture: ComponentFixture<GosCardComponent>;
  let component: GosCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GosCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to elevated variant', () => {
    expect(component.variant()).toBe('elevated');
  });

  it('should set role=button when clickable', () => {
    fixture.componentRef.setInput('clickable', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('role')).toBe('button');
  });

  it('should not set role when not clickable', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBeNull();
  });
});
