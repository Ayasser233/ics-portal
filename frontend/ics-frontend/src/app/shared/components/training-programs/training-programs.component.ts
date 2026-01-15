import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TrainingProgram {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-training-programs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training-programs.component.html',
  styleUrl: './training-programs.component.scss',
})
export class TrainingProgramsComponent {
  @Input() title: string = '';
  @Input() programs: TrainingProgram[] = [];
}
