import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GosContainerComponent } from './gos-container';

describe('GosContainerComponent', () => {
  let fixture: ComponentFixture<GosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GosContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GosContainerComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should not be narrow by default', () => {
    expect(fixture.componentInstance.narrow()).toBe(false);
  });

  it('should add narrow class when narrow=true', () => {
    fixture.componentRef.setInput('narrow', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('gos-container--narrow')).toBe(true);
  });
});
