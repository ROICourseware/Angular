import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { COUNTRY_ROUTES } from './countries/countries.routes';

export const routes: Routes = [ 
    ...COUNTRY_ROUTES,
    {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/about'
  }
];
