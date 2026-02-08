import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface SubMenuItem {
  label: string;
  path: string;
}

interface MenuItem {
  label: string;
  path?: string;
  submenu?: SubMenuItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    { label: 'Home', path: '/' },
    { label: 'How to Hire', path: '/how-to-hire' },
    {
      label: 'Our Services',
      path: '/our-services',
      submenu: [
        { label: 'Full-Time Domestic Workers', path: '/our-services/full-time-domestic' },
        { label: 'Part-Time Domestic Workers', path: '/our-services/part-time-domestic' },
        { label: 'Cooks', path: '/our-services/cook' },
        { label: 'Drivers', path: '/our-services/driver' },
        { label: 'Babysitters', path: '/our-services/babysitter' },
      ],
    },
    { label: 'Screening & Training', path: '/screening-training' },
    // { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact-us' },
  ];

  isMenuOpen = false;
  activeSubmenu: string | null = null;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.activeSubmenu = null;
  }

  toggleSubmenu(label: string): void {
    this.activeSubmenu = this.activeSubmenu === label ? null : label;
  }

  isSubmenuOpen(label: string): boolean {
    return this.activeSubmenu === label;
  }
}
