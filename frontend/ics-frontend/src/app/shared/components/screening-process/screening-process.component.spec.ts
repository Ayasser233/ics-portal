import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScreeningProcessComponent } from './screening-process.component';

describe('ScreeningProcessComponent', () => {
  let component: ScreeningProcessComponent;
  let fixture: ComponentFixture<ScreeningProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningProcessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
