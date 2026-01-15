import { Component } from '@angular/core';
import { ServiceDetailComponent } from '../../../../../shared/components/service-detail/service-detail.component';
import type { ServiceDetailData } from '../../../../../shared/components/service-detail/service-detail.component';

@Component({
  selector: 'app-all-around-maid',
  imports: [ServiceDetailComponent],
  templateUrl: './all-around-maid.component.html',
  styleUrl: './all-around-maid.component.scss',
})
export class AllAroundMaid {
  serviceData: ServiceDetailData = {
    title: 'Full-Time Domestic Workers',
    description:
      'Comprehensive household management with dedicated staff for all your domestic needs. Our full-time domestic workers provide reliable, professional service to keep your home running smoothly.',
    icon: 'home',
    features: [
      'Housekeeping and cleaning',
      'Laundry and ironing',
      'Household organization',
      'Full-time availability',
      'Consistent and reliable service',
      'Long-term commitment',
    ],
    responsibilities: [
      'Daily housekeeping and maintenance',
      'Complete laundry and ironing services',
      'Organizing and maintaining household spaces',
      'General cleaning and upkeep',
      'Following household routines and schedules',
      'Maintaining cleanliness standards',
    ],
    requirements: [
      'Background-checked and verified professionals',
      'Minimum 2 years of household experience',
      'Training in proper cleaning techniques',
      'Reliable and trustworthy character',
      'Good communication skills',
      'Health certificate and legal work authorization',
    ],
  };
}
