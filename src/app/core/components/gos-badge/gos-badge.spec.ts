import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GosBadgeComponent } from './gos-badge';

describe('GosBadgeComponent', () => {
  let fixture: ComponentFixture<GosBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GosBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GosBadgeComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should default to primary variant and md size', () => {
    expect(fixture.componentInstance.variant()).toBe('primary');
    expect(fixture.componentInstance.size()).toBe('md');
  });
});
