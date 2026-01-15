import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PackageFeature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-package-includes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package-includes.component.html',
  styleUrl: './package-includes.component.scss',
})
export class PackageIncludesComponent {
  @Input() title: string = '';
  @Input() features: PackageFeature[] = [];
}
