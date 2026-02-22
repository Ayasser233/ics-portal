import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ContactInfoCardComponent, ContactInfo } from '../../../../shared/components/contact-info-card/contact-info-card.component';
import { ContactFormComponent, ContactFormData } from '../../../../shared/components/contact-form/contact-form.component';
import { CommitmentCardComponent } from '../../../../shared/components/commitment-card/commitment-card.component';

@Component({
  selector: 'app-contact-us',
  imports: [ContactInfoCardComponent, ContactFormComponent, CommitmentCardComponent],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  private router = inject(Router);

  contactInfoItems: ContactInfo[] = [
    {
      icon: 'email',
      title: 'Email Us',
      primaryText: 'apply@ipacph.com',
      secondaryText: 'We\'ll respond within 24 hours'
    },
    {
      icon: 'phone',
      title: 'Call Us',
      primaryText: '+63 2 7274 2863',
      secondaryText: 'Mon-Fri, 9:00 AM - 6:00 PM'
    },
    {
      icon: 'location',
      title: 'Visit Us',
      primaryText: '162 Suite B Pasig Blvd',
      secondaryText: 'Pasig, Metro Manila',
      tertiaryText: 'Philippines'
    },
    {
      icon: 'whatsapp',
      title: 'WhatsApp Us',
      primaryText: 'Chat with us on WhatsApp',
      secondaryText: 'Quick responses during business hours',
      whatsappNumber: ' ' // Format: country code + phone number without + or spaces
    }
  ];

  onFormSubmit(formData: ContactFormData): void {
    console.log('Form submitted:', formData);
    // Handle form submission logic here (e.g., API call)
    // Navigate to success page
    this.router.navigate(['/contact-us/success']);
  }
}
