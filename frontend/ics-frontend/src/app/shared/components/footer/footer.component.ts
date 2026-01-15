import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  path: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks: FooterLink[] = [
    { label: 'Who We Are', path: '/' },
    { label: 'How to Hire', path: '/how-to-hire' },
    { label: 'Our Services', path: '/our-services' },
    { label: 'Screening & Training', path: '/screening-training' },
    { label: 'Pricing', path: '/pricing' },
  ];

  resources: FooterLink[] = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-of-service' },
    { label: 'Ethical Standards', path: '/ethical-standards' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Blog', path: '/blog' },
  ];

  socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'Facebook', icon: 'facebook', url: '#' },
  ];

  contactInfo = {
    email: 'info@icsportal.com',
    phone: '+1 (555) 123-4567',
    address: '123 Professional Plaza\nSuite 500, Business District\nCity, State 12345',
  };
}
