import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    loadComponent: () => import('./components/modals/modals.component').then(m => m.ModalsComponent)
  },
 

];
