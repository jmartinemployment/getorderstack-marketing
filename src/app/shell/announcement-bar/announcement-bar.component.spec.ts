import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AnnouncementBarComponent } from './announcement-bar.component';

describe('AnnouncementBarComponent', () => {
  let fixture: ComponentFixture<AnnouncementBarComponent>;
  let component: AnnouncementBarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementBarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncementBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render message and link text from config', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Now serving South Florida restaurants');
    expect(el.textContent).toContain('See how we compare to Toast');
  });

  it('should dismiss the bar when close button is clicked', () => {
    const closeBtn = fixture.nativeElement.querySelector('.announcement__close') as HTMLButtonElement;
    closeBtn.click();
    fixture.detectChanges();

    const bar = fixture.nativeElement.querySelector('.announcement');
    expect(bar).toBeNull();
  });

  it('should emit dismissed event on close', () => {
    let emitted = false;
    component.dismissed.subscribe(() => emitted = true);

    const closeBtn = fixture.nativeElement.querySelector('.announcement__close') as HTMLButtonElement;
    closeBtn.click();

    expect(emitted).toBe(true);
  });

  it('should not render when isDismissed is true', () => {
    component.isDismissed.set(true);
    fixture.detectChanges();

    const bar = fixture.nativeElement.querySelector('.announcement');
    expect(bar).toBeNull();
  });
});
