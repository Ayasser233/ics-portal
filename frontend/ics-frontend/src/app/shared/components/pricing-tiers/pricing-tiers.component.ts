import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface PricingTier {
  name: string;
  badge?: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}

@Component({
  selector: 'app-pricing-tiers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pricing-tiers.component.html',
  styleUrl: './pricing-tiers.component.scss',
})
export class PricingTiersComponent {
  @Input() badge: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tiers: PricingTier[] = [];
}
