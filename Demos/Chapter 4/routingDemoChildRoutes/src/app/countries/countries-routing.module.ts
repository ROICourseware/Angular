import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryParentComponent } from './country-parent.component';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';
import { CountryFormComponent } from './country-form.component';

const routes: Routes = [
  {
    path: 'countries',
    component: CountryParentComponent,
    children: [
      {
        path: '',
        component: CountryListComponent
      },
      {
        path: ':id',
        component: CountryComponent
      },
      {
        path: 'form',
        component: CountryFormComponent,
        outlet: 'country'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
