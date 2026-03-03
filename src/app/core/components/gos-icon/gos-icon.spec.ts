import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { GosIconComponent } from './gos-icon';

describe('GosIconComponent', () => {
  let fixture: ComponentFixture<GosIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GosIconComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(GosIconComponent);
    fixture.componentRef.setInput('name', 'test-icon');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should default to md size', () => {
    expect(fixture.componentInstance.size()).toBe('md');
  });

  it('should set aria-hidden when no ariaLabel', () => {
    const span = fixture.nativeElement.querySelector('span');
    expect(span.getAttribute('aria-hidden')).toBe('true');
  });
});
