import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section.component';
import { ContentSectionComponent } from '../../../../shared/components/content-section/content-section.component';
import { FeatureGridComponent, FeatureCard } from '../../../../shared/components/feature-grid/feature-grid.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, ContentSectionComponent, FeatureGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class Home {
  heroStats = [
    { value: '500+', label: 'Companies Served' },
    { value: '10K+', label: 'Professionals Placed' },
    { value: '95%', label: 'Satisfaction Rate' },
  ];

  coreValues: FeatureCard[] = [
    {
      icon: 'Integrity',
      title: 'Integrity',
      description: 'Honest, transparent recruitment practices.',
      color: '#3b82f6',
    },
    {
      icon: 'Transparency',
      title: 'Transparency',
      description: 'Carefully selected and trained candidates.',
      color: '#3b82f6',
    },
    {
      icon: 'Professional Care',
      title: 'Professional Care',
      description: 'Ethical recruitment and worker welfare.',
      color: '#3b82f6',
    },
    {
      icon: 'Growth',
      title: 'Continuous Growth',
      description: 'Building long-term relationships with clients.',
      color: '#3b82f6',
    },
    {
      icon: 'Compliance',
      title: 'Compliance',
      description: 'Full adherence to labor and recruitment regulations.',
      color: '#3b82f6',
    }
  ];
}
