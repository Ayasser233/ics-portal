import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.scss',
})
export class ContentSectionComponent {
  @Input() badge: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() theme: 'light' | 'dark' = 'light';
}
