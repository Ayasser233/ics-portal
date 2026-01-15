import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  @Input() badge: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() primaryButtonText: string = '';
  @Input() primaryButtonLink: string = '';
  @Input() secondaryButtonText: string = '';
  @Input() secondaryButtonLink: string = '';
  @Input() stats: Array<{ value: string; label: string }> = [];
  @Input() features: Array<{ icon: string; title: string; description: string }> = [];
}
