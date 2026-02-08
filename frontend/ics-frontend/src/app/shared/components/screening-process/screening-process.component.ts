import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ScreeningStep {
  icon: string;
  title: string;
  description?: string;
}

@Component({
  selector: 'app-screening-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screening-process.component.html',
  styleUrl: './screening-process.component.scss',
})
export class ScreeningProcessComponent {
  @Input() title: string = '';
  @Input() steps: ScreeningStep[] = [];
}
