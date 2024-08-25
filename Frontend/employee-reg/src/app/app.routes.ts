import { Routes } from '@angular/router';
import { EmployeecrudComponent } from './employeecrud/employeecrud.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee',
    pathMatch: 'full',
  },
  {
    path: 'employee',
    component: EmployeecrudComponent,
  },
];
