import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApproachSectionComponent } from './approach-section.component';

describe('ApproachSectionComponent', () => {
  let component: ApproachSectionComponent;
  let fixture: ComponentFixture<ApproachSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproachSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApproachSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
