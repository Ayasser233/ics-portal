import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceItem {
  title: string;
  description: string;
  items?: string[];
}

export interface ServiceTab {
  label: string;
  intro?: string;
  services: ServiceItem[];
}

@Component({
  selector: 'app-services-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-tabs.component.html',
  styleUrl: './services-tabs.component.scss',
})
export class ServicesTabsComponent {
  @Input() title: string = 'Our Services';
  @Input() tabs: ServiceTab[] = [];

  activeTab: number = 0;

  selectTab(index: number): void {
    this.activeTab = index;
  }
}
