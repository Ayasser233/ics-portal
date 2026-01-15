import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Babysitter } from './babysitter.component';

describe('Babysitter', () => {
  let component: Babysitter;
  let fixture: ComponentFixture<Babysitter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Babysitter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Babysitter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
