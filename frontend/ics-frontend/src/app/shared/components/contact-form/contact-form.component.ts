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
  cvFile: File | null;
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
    cvFile: null,
    message: ''
  };

  selectedFileName: string = '';

  get availableServices() {
    return this.servicesByUserType[this.formData.userType as keyof typeof this.servicesByUserType] || [];
  }

  onUserTypeChange(): void {
    // Clear selected service when user type changes
    this.formData.service = '';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // Check if file is PDF or DOC/DOCX
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(file.type)) {
        this.formData.cvFile = file;
        this.selectedFileName = file.name;
      } else {
        alert('Please upload a PDF or Word document');
        input.value = '';
      }
    }
  }

  removeFile(): void {
    this.formData.cvFile = null;
    this.selectedFileName = '';
  }

  onSubmit(): void {
    this.formSubmit.emit(this.formData);
  }
}
