import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningTraining } from './screening-training.component';

describe('ScreeningTraining', () => {
  let component: ScreeningTraining;
  let fixture: ComponentFixture<ScreeningTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
