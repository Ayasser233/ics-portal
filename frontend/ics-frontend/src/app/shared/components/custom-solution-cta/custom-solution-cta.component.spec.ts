import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomSolutionCtaComponent } from './custom-solution-cta.component';

describe('CustomSolutionCtaComponent', () => {
  let component: CustomSolutionCtaComponent;
  let fixture: ComponentFixture<CustomSolutionCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSolutionCtaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSolutionCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
