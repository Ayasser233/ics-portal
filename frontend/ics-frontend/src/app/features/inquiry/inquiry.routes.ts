import { Routes } from '@angular/router';
import { ContactUs } from './pages/contact-us/contact-us';
import { InquirySuccess } from './pages/inquiry-success/inquiry-success';

export const inquiryRoutes: Routes = [
  { path: '', component: ContactUs },
  { path: 'success', component: InquirySuccess }
];
