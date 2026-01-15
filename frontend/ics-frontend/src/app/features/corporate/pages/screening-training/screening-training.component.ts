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
      icon: 'user-check',
      title: 'Initial Interview & Skills Assessment',
      description:
        'Comprehensive evaluation of qualifications, experience, and professional capabilities.',
    },
    {
      icon: 'clipboard-list',
      title: 'Background and Experience Verification',
      description:
        'Thorough verification of credentials, references, and employment history.',
    },
    {
      icon: 'heart',
      title: 'Medical Screening',
      description:
        'General health check-up, communicable disease testing, and physical and mental fitness assessment.',
    },
    {
      icon: 'shield',
      title: 'Character & Reference Checks',
      description:
        'Verification of character, integrity, and professional references from previous employers.',
    },
    {
      icon: 'award',
      title: 'Pre-Deployment Orientation & Training',
      description:
        'Comprehensive preparation including workplace expectations, cultural awareness, and job-specific training.',
    },
  ];

  approachItems: ApproachItem[] = [
    {
      icon: 'check-circle',
      iconColor: 'green',
      title: 'Ethical and transparent recruitment',
      description:
        'We operate with complete honesty and fairness in all our recruitment practices.',
    },
    {
      icon: 'users',
      iconColor: 'blue',
      title: 'Carefully screened Filipino workers',
      description:
        'All candidates undergo rigorous screening to ensure quality and reliability.',
    },
    {
      icon: 'handshake',
      iconColor: 'purple',
      title: 'End-to-end hiring support',
      description:
        'Complete assistance from candidate selection through to successful deployment.',
    },
    {
      icon: 'heart',
      iconColor: 'red',
      title: 'Commitment to worker welfare',
      description:
        'We prioritize the well-being and fair treatment of all workers in our program.',
    },
    {
      icon: 'globe',
      iconColor: 'dark',
      title: 'Trusted by families and employers worldwide',
      description:
        'Proven track record of successful placements and satisfied clients globally.',
    },
  ];

  trainingPrograms: TrainingProgram[] = [
    {
      icon: 'check',
      title: 'Professional Skills Development',
      description:
        'Enhancing core competencies including communication, teamwork, and problem-solving.',
    },
    {
      icon: 'check',
      title: 'Industry-Specific Training',
      description:
        'Specialized knowledge and skills training for various industry sectors.',
    },
    {
      icon: 'check',
      title: 'Workplace Readiness',
      description:
        'Preparation for professional environments including workplace etiquette and expectations.',
    },
    {
      icon: 'check',
      title: 'Safety & Compliance',
      description:
        'Essential training on workplace safety, regulations, and compliance requirements.',
    },
    {
      icon: 'check',
      title: 'Career Advancement',
      description:
        'Ongoing professional development opportunities for career growth and progression.',
    },
    {
      icon: 'check',
      title: 'Well-being Support',
      description:
        'Resources and guidance for maintaining professional and personal well-being.',
    },
  ];
}
