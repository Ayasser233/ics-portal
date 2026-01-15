import { Component } from '@angular/core';
import { ServiceDetailComponent } from '../../../../../shared/components/service-detail/service-detail.component';
import type { ServiceDetailData } from '../../../../../shared/components/service-detail/service-detail.component';

@Component({
  selector: 'app-driver',
  imports: [ServiceDetailComponent],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss',
})
export class Driver {
  serviceData: ServiceDetailData = {
    title: 'Driver',
    description:
      'Reliable and professional driving services for all your transportation needs. Our drivers ensure safe, punctual, and comfortable journeys for you and your family.',
    icon: 'car',
    features: [
      'Daily commute and regular routes',
      'School runs and children pickups',
      'Shopping trips and errands',
      'Airport transfers and long-distance travel',
      'Vehicle maintenance awareness',
      'Flexible scheduling options',
    ],
    responsibilities: [
      'Safe and defensive driving at all times',
      'Punctual pickup and drop-off service',
      'Maintaining vehicle cleanliness inside',
      'Planning optimal routes to avoid traffic',
      'Assisting with loading and unloading',
      'Basic vehicle maintenance checks',
    ],
    requirements: [
      'Valid driving license with clean record',
      'Minimum 5 years of professional driving experience',
      'Knowledge of local roads and traffic patterns',
      'Defensive driving course certification',
      'Professional appearance and courteous manner',
      'Background check and driving history verification',
    ],
  };
}
