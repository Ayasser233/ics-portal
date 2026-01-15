import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  description: string;
  iconImage?: string;
}

@Component({
  selector: 'app-process-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-steps.component.html',
  styleUrl: './process-steps.component.scss',
})
export class ProcessStepsComponent {
  @Input() badge: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() steps: ProcessStep[] = [];
}
