import { Component } from '@angular/core';
import {
  PricingTiersComponent,
  type PricingTier,
  PackageIncludesComponent,
  type PackageFeature,
  CustomSolutionCtaComponent,
} from '../../../../shared/components';

@Component({
  selector: 'app-pricing',
  imports: [
    PricingTiersComponent,
    PackageIncludesComponent,
    CustomSolutionCtaComponent,
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class Pricing {
  pricingTiers: PricingTier[] = [
    {
      name: 'Essential',
      description: 'Perfect for small businesses with basic staffing needs',
      price: 'Custom pricing based on your needs',
      features: [
        'Professional candidate screening',
        'Background verification',
        'Skills assessment',
        'Basic training support',
        'Email support',
        '30-day placement guarantee',
      ],
      buttonText: 'Request Quote',
      buttonLink: '/contact-us',
      highlighted: false,
    },
    {
      name: 'Professional',
      badge: 'Most Popular',
      description: 'Ideal for growing companies with ongoing needs',
      price: 'Custom pricing based on your needs',
      features: [
        'Everything in Essential, plus:',
        'Dedicated account manager',
        'Priority candidate matching',
        'Comprehensive training programs',
        'Ongoing placement support',
        'Quarterly performance reviews',
        '90-day placement guarantee',
        'Priority support',
      ],
      buttonText: 'Request Quote',
      buttonLink: '/contact-us',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large-scale workforce needs',
      price: 'Custom pricing based on your needs',
      features: [
        'Everything in Professional, plus:',
        'Custom screening protocols',
        'Volume hiring discounts',
        'On-site coordination',
        'Custom training programs',
        'Dedicated support team',
        'SLA guarantees',
        '24/7 priority support',
      ],
      buttonText: 'Request Quote',
      buttonLink: '/contact-us',
      highlighted: false,
    },
  ];

  packageFeatures: PackageFeature[] = [
    {
      icon: 'check',
      title: 'Fair Treatment Guarantee',
      description:
        'All candidates receive respectful, dignified treatment throughout the process.',
    },
    {
      icon: 'check',
      title: 'Comprehensive Training',
      description:
        'Professional development and skills training for all placed candidates.',
    },
    {
      icon: 'check',
      title: 'Legal Compliance',
      description:
        'Full adherence to labor laws, regulations, and ethical standards.',
    },
    {
      icon: 'check',
      title: 'Transparent Communication',
      description:
        'Clear, honest communication at every stage of the hiring process.',
    },
    {
      icon: 'check',
      title: 'Ongoing Support',
      description:
        'Post-placement support for both clients and candidates.',
    },
    {
      icon: 'check',
      title: 'Quality Assurance',
      description:
        'Rigorous screening and verification to ensure qualified placements.',
    },
  ];
}
