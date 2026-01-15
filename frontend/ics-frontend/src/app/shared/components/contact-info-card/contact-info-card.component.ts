import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ContactInfo {
  icon: 'email' | 'phone' | 'location' | 'whatsapp';
  title: string;
  primaryText: string;
  secondaryText?: string;
  tertiaryText?: string;
  whatsappNumber?: string;
}

@Component({
  selector: 'app-contact-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-info-card.component.html',
  styleUrl: './contact-info-card.component.scss'
})
export class ContactInfoCardComponent {
  @Input() info!: ContactInfo;
}
