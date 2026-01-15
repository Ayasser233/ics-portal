import { Component } from '@angular/core';
import {
  ProcessStepsComponent,
  type ProcessStep,
  CtaBannerComponent,
} from '../../../../shared/components';

@Component({
  selector: 'app-how-to-hire',
  imports: [ProcessStepsComponent, CtaBannerComponent],
  templateUrl: './how-to-hire.component.html',
  styleUrl: './how-to-hire.component.scss',
})
export class HowToHire {
  processSteps: ProcessStep[] = [
    {
      number: '01',
      icon: 'document',
      iconImage: 'icons/Submit your Request.svg',
      title: 'Submit Your Request',
      description:
        'Share your staffing requirements, including job role, experience level, and preferences.',
    },
    {
      number: '02',
      icon: 'user-check',
      iconImage: 'icons/Candidate Shortlisting.svg',
      title: 'Candidate Shortlisting',
      description:
        'We carefully select suitable candidates based on skills, experience, and personality match.',
    },
    {
      number: '03',
      icon: 'clipboard-check',
      iconImage: 'icons/Interview.svg',
      title: 'Interview & Selection',
      description:
        'Employers may interview candidates directly (online or recorded interviews).',
    },
    {
      number: '04',
      icon: 'file-text',
      iconImage: 'icons/Documentation.svg',
      title: 'Documentation & Processing',
      description:
        'ICS manages contracts, legal documentation, and deployment procedures.',
    },
    {
      number: '05',
      icon: 'handshake',
      iconImage: 'icons/Deployment.svg',
      title: 'Deployment & Follow-Up',
      description:
        'We ensure smooth arrival and provide post-placement support.',
    },
  ];

  commitmentFeatures: string[] = [
    'Comprehensive background checks',
    'Skills and competency verification',
    'Legal compliance assurance',
    'Cultural fit assessment',
    'Continuous candidate support',
    'Post-placement follow-up',
  ];
}
