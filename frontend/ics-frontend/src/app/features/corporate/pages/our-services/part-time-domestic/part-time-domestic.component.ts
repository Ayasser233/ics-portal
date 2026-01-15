import { Component } from '@angular/core';
import { ServiceDetailComponent } from '../../../../../shared/components/service-detail/service-detail.component';
import type { ServiceDetailData } from '../../../../../shared/components/service-detail/service-detail.component';

@Component({
  selector: 'app-part-time-domestic',
  imports: [ServiceDetailComponent],
  templateUrl: './part-time-domestic.component.html',
  styleUrl: './part-time-domestic.component.scss',
})
export class PartTimeDomestic {
  serviceData: ServiceDetailData = {
    title: 'Part-Time Domestic Workers',
    description:
      'Flexible staffing solutions for short-term or specific household needs. Our part-time domestic workers provide reliable service on your schedule.',
    icon: 'clock',
    features: [
      'Flexible work schedules',
      'Daily or hourly assistance',
      'Ideal for short-term or specific needs',
      'Cost-effective solution',
      'No long-term commitment required',
      'Professional and reliable service',
    ],
    responsibilities: [
      'Cleaning and housekeeping as needed',
      'Laundry and ironing services',
      'Light household maintenance',
      'Flexible scheduling to meet your needs',
      'Professional service during assigned hours',
      'Consistent quality work',
    ],
    requirements: [
      'Background-checked and verified professionals',
      'Experience in household services',
      'Punctual and reliable',
      'Good communication skills',
      'Flexible and adaptable',
      'Health certificate and legal work authorization',
    ],
  };
}
