import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    loadComponent: () => import('./components/modals/modals.component').then(m => m.ModalsComponent)
  },
  {
    path: 'test',
    loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
  },
 

];
