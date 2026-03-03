import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroBackgroundComponent } from './hero-background';

describe('HeroBackgroundComponent', () => {
  let fixture: ComponentFixture<HeroBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBackgroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroBackgroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render gradient layer', () => {
    const gradient = fixture.nativeElement.querySelector('.hero-bg__gradient');
    expect(gradient).toBeTruthy();
  });

  it('should render grid layer', () => {
    const grid = fixture.nativeElement.querySelector('.hero-bg__grid');
    expect(grid).toBeTruthy();
  });

  it('should render two orbs', () => {
    const orbs = fixture.nativeElement.querySelectorAll('.hero-bg__orb');
    expect(orbs.length).toBe(2);
  });

  it('should project content', () => {
    const host = fixture.nativeElement.querySelector('.hero-bg');
    expect(host).toBeTruthy();
  });
});
