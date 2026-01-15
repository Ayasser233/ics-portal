import { Component } from '@angular/core';
import { ServiceDetailComponent } from '../../../../../shared/components/service-detail/service-detail.component';
import type { ServiceDetailData } from '../../../../../shared/components/service-detail/service-detail.component';

@Component({
  selector: 'app-cook',
  imports: [ServiceDetailComponent],
  templateUrl: './cook.component.html',
  styleUrl: './cook.component.scss',
})
export class Cook {
  serviceData: ServiceDetailData = {
    title: 'Cook',
    description:
      'Professional cooking services to bring delicious, home-cooked meals to your table. Our cooks combine culinary skills with an understanding of nutrition and dietary needs.',
    icon: 'chef',
    features: [
      'Daily meal preparation for all family members',
      'Menu planning and recipe variety',
      'Grocery shopping and ingredient selection',
      'Special dietary requirement accommodation',
      'Kitchen organization and cleanliness',
      'Meal prep for the week ahead',
    ],
    responsibilities: [
      'Preparing breakfast, lunch, and dinner as needed',
      'Creating balanced, nutritious meal plans',
      'Shopping for fresh, quality ingredients',
      'Maintaining a hygienic and organized kitchen',
      'Storing food properly and managing leftovers',
      'Accommodating family preferences and allergies',
    ],
    requirements: [
      'Culinary training or professional cooking experience',
      'Minimum 3 years of professional cooking experience',
      'Food safety and hygiene certification',
      'Knowledge of various cuisines and dietary needs',
      'Ability to work efficiently in kitchen environment',
      'Clean health record and background check',
    ],
  };
}
