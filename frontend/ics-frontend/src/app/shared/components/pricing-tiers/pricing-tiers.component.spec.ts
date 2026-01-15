import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingTiersComponent } from './pricing-tiers.component';

describe('PricingTiersComponent', () => {
  let component: PricingTiersComponent;
  let fixture: ComponentFixture<PricingTiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingTiersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
