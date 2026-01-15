import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToHire } from './how-to-hire.component';

describe('HowToHire', () => {
  let component: HowToHire;
  let fixture: ComponentFixture<HowToHire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToHire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToHire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
