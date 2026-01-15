import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current year', () => {
    expect(component.currentYear).toBe(new Date().getFullYear());
  });

  it('should have quick links', () => {
    expect(component.quickLinks.length).toBeGreaterThan(0);
  });

  it('should have resources', () => {
    expect(component.resources.length).toBeGreaterThan(0);
  });

  it('should have contact info', () => {
    expect(component.contactInfo.email).toBeDefined();
    expect(component.contactInfo.phone).toBeDefined();
    expect(component.contactInfo.address).toBeDefined();
  });
});
