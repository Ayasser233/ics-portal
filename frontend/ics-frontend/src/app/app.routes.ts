import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/corporate/corporate.routes')
            .then(m => m.corporateRoutes)
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./features/inquiry/inquiry.routes')
            .then(m => m.inquiryRoutes)
      }
    ]
  }
];
