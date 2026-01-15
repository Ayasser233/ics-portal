import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ApproachItem {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-approach-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approach-section.component.html',
  styleUrl: './approach-section.component.scss',
})
export class ApproachSectionComponent {
  @Input() title: string = '';
  @Input() items: ApproachItem[] = [];
}
