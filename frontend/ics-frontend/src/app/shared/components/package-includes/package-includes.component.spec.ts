import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PackageIncludesComponent } from './package-includes.component';

describe('PackageIncludesComponent', () => {
  let component: PackageIncludesComponent;
  let fixture: ComponentFixture<PackageIncludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageIncludesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PackageIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
