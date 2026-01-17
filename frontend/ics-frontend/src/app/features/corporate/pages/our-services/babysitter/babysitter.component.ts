import { Component } from '@angular/core';
import { ServiceDetailComponent } from '../../../../../shared/components/service-detail/service-detail.component';
import type { ServiceDetailData } from '../../../../../shared/components/service-detail/service-detail.component';

@Component({
  selector: 'app-babysitter',
  imports: [ServiceDetailComponent],
  templateUrl: './babysitter.component.html',
  styleUrl: './babysitter.component.scss',
})
export class Babysitter {
  serviceData: ServiceDetailData = {
    title: 'Babysitters',
    description:
      'Experienced and caring childcare professionals for your peace of mind. Our babysitters provide nurturing, safe, and engaging care for your children.',
    icon: 'baby-sitters',
    features: [
      'Childcare and supervision',
      'Feeding, hygiene, and daily routines',
      'Patient, caring, and experienced with children',
      'Age-appropriate activities and play',
      'Safe and secure environment',
      'Trusted and background-checked professionals',
    ],
    responsibilities: [
      'Supervising children and ensuring their safety',
      'Preparing and serving meals and snacks',
      'Assisting with hygiene and daily routines',
      'Engaging children in age-appropriate activities',
      'Following parents\' instructions and schedules',
      'Maintaining a clean and organized play area',
    ],
    requirements: [
      'Background-checked and verified professionals',
      'Minimum 2 years of childcare experience',
      'Patient and caring personality',
      'First aid and CPR certification preferred',
      'Understanding of child development',
      'Health certificate and legal work authorization',
    ],
  };
}
