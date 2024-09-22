import { Routes } from '@angular/router';
import { CountryListComponent } from './countries/country-list/country-list.component';

export const routes: Routes = [ 
  {
    path: '',
    component: CountryListComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
