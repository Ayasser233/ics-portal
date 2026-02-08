import { Component } from '@angular/core';
import {
  HeroSectionComponent,
  ScreeningProcessComponent,
  type ScreeningStep,
  ApproachSectionComponent,
  type ApproachItem,
  TrainingProgramsComponent,
  type TrainingProgram,
  ContentSectionComponent,
} from '../../../../shared/components';

@Component({
  selector: 'app-screening-training',
  imports: [
    HeroSectionComponent,
    ScreeningProcessComponent,
    ApproachSectionComponent,
    ContentSectionComponent,
  ],
  templateUrl: './screening-training.component.html',
  styleUrl: './screening-training.component.scss',
})
export class ScreeningTraining {
  screeningSteps: ScreeningStep[] = [
    {
      icon: 'icons/3d-Icons/Initial Interview.svg',
      title: 'Initial Interview & Skills Assessment',
    },
    {
      icon: 'icons/3d-Icons/Background and experience Verification.svg',
      title: 'Background and Experience Verification',
    },
    {
      icon: 'icons/3d-Icons/Medical Screening.svg',
      title: 'Medical Screening',
      description:
        '<ul><li>General health check-up</li><li>Communicable disease testing</li><li>Physical and mental fitness assessment</li></ul>',
    },
    {
      icon: 'icons/3d-Icons/Character Check.svg',
      title: 'Character & Reference Checks',
    },
    {
      icon: 'icons/3d-Icons/Pre-deployment.svg',
      title: 'Pre-Deployment Orientation & Training',
    },
  ];

  approachItems: ApproachItem[] = [
    {
      image: 'images/1.jpg',
      mobileImage: 'images/phone/1.jpg',
      title: 'Ethical and Transparent Recruitment',
      description:
        'We operate with complete honesty and fairness in all our recruitment practices, ensuring transparency at every step of the process.',
    },
    {
      image: 'images/2.jpg',
      mobileImage: 'images/phone/2.jpg',
      title: 'Carefully Screened Filipino Workers',
      description:
        'All candidates undergo rigorous screening to ensure quality and reliability, meeting the highest standards of professional excellence.',
    },
    {
      image: 'images/3.jpg',
      mobileImage: 'images/phone/3.jpg',
      title: 'End-to-End Hiring Support',
      description:
        'Complete assistance from candidate selection through to successful deployment, providing comprehensive support throughout the journey.',
    },
    {
      image: 'images/4.jpg',
      mobileImage: 'images/phone/4.jpg',
      title: 'Commitment to Worker Welfare',
      description:
        'We prioritize the well-being and fair treatment of all workers in our program, ensuring their rights and dignity are protected.',
    },
    {
      image: 'images/5.jpg',
      mobileImage: 'images/phone/5.jpg',
      title: 'Trusted by Families and Employers Worldwide',
      description:
        'Proven track record of successful placements and satisfied clients globally, building lasting relationships based on trust and quality service.',
    },
  ];

}
