import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss',
})
export class CtaBannerComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() features: string[] = [];
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '';
}
