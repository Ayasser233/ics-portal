import { Component } from '@angular/core';
import {
  ServiceCardComponent,
  type ServiceCardData,
} from '../../../../shared/components/service-card/service-card.component';

@Component({
  selector: 'app-our-services',
  imports: [ServiceCardComponent],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServices {
  services: ServiceCardData[] = [
    {
      icon: 'full-time',
      title: 'Full-Time Domestic Workers',
      description:
        'Comprehensive household management with dedicated staff for all your domestic needs.',
      features: [
        'Housekeeping and cleaning',
        'Laundry and ironing',
        'Household organization',
      ],
      link: '/our-services/full-time-domestic',
    },
    {
      icon: 'part-time',
      title: 'Part-Time Domestic Workers',
      description:
        'Flexible staffing solutions for short-term or specific household needs.',
      features: [
        'Flexible work schedules',
        'Daily or hourly assistance',
        'Ideal for short-term or specific needs',
      ],
      link: '/our-services/part-time-domestic',
    },
    {
      icon: 'cooks',
      title: 'Cooks',
      description:
        'Professional cooking services with expertise in diverse cuisines and dietary needs.',
      features: [
        'Home cooking and meal preparation',
        'Knowledge of international cuisines',
        'Kitchen organization and hygiene',
      ],
      link: '/our-services/cook',
    },
    {
      icon: 'drivers',
      title: 'Drivers',
      description:
        'Professional and licensed drivers for safe and reliable transportation.',
      features: [
        'Professional and licensed drivers',
        'Safe and reliable transportation',
        'Familiar with local routes and safety standards',
      ],
      link: '/our-services/driver',
    },
    {
      icon: 'baby-sitters',
      title: 'Babysitters',
      description:
        'Experienced and caring childcare professionals for your peace of mind.',
      features: [
        'Childcare and supervision',
        'Feeding, hygiene, and daily routines',
        'Patient, caring, and experienced with children',
      ],
      link: '/our-services/babysitter',
    },
  ];
}
