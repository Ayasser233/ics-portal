import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ContactFormData {
  userType: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @Input() submitButtonText: string = 'Send Message';
  @Output() formSubmit = new EventEmitter<ContactFormData>();

  servicesByUserType = {
    company: [
      { id: 'all-around-maid', label: 'All-Around Maid' },
      { id: 'maid-newborn', label: 'Maid for Newborn Care' },
      { id: 'maid-children', label: 'Maid for Children' },
      { id: 'maid-pets', label: 'Maid for Pets' },
      { id: 'caregiver-elderly', label: 'Caregiver for Elderly' },
      { id: 'driver', label: 'Driver' },
      { id: 'cook', label: 'Cook' }
    ],
    client: [
      { id: 'all-around-maid', label: 'All-Around Maid' },
      { id: 'maid-newborn', label: 'Maid for Newborn Care' },
      { id: 'maid-children', label: 'Maid for Children' },
      { id: 'maid-pets', label: 'Maid for Pets' },
      { id: 'caregiver-elderly', label: 'Caregiver for Elderly' },
      { id: 'driver', label: 'Driver' },
      { id: 'cook', label: 'Cook' }
    ],
    applicant: [
      { id: 'maid', label: 'Maid Position' },
      { id: 'nanny', label: 'Nanny Position' },
      { id: 'caregiver', label: 'Caregiver Position' },
      { id: 'driver', label: 'Driver Position' },
      { id: 'cook', label: 'Cook Position' },
      { id: 'housekeeper', label: 'Housekeeper Position' }
    ]
  };

  formData: ContactFormData = {
    userType: 'company',
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: '',
    message: ''
  };

  get availableServices() {
    return this.servicesByUserType[this.formData.userType as keyof typeof this.servicesByUserType] || [];
  }

  onUserTypeChange(): void {
    // Clear selected service when user type changes
    this.formData.service = '';
  }

  onSubmit(): void {
    this.formSubmit.emit(this.formData);
  }
}
