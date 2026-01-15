import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTimeDomestic } from './part-time-domestic.component';

describe('PartTimeDomestic', () => {
  let component: PartTimeDomestic;
  let fixture: ComponentFixture<PartTimeDomestic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartTimeDomestic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartTimeDomestic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
