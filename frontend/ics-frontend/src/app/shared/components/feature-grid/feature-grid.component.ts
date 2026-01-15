import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

@Component({
  selector: 'app-feature-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-grid.component.html',
  styleUrl: './feature-grid.component.scss',
})
export class FeatureGridComponent {
  @Input() features: FeatureCard[] = [];
  @Input() columns: number = 5;

  getIconPath(icon: string): string {
    const iconMap: Record<string, string> = {
      'Compliance': 'Compliance.svg',
      'Growth': 'Growth.svg',
      'Integrity': 'Integrity.svg',
      'Professional Care': 'Professional Care.svg',
      'Transparency': 'Transparency.svg'
    };
    const fileName = iconMap[icon.toLowerCase()] || `${icon}.svg`;
    return `icons/${fileName}`;
  }

}
