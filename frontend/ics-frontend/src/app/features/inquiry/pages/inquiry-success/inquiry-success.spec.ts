import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirySuccess } from './inquiry-success';

describe('InquirySuccess', () => {
  let component: InquirySuccess;
  let fixture: ComponentFixture<InquirySuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquirySuccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquirySuccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
