import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-solution-cta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './custom-solution-cta.component.html',
  styleUrl: './custom-solution-cta.component.scss',
})
export class CustomSolutionCtaComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '';
}
