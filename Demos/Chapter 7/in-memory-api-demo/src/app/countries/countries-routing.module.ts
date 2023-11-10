import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list.component';
import { CountryFormComponent } from './country-form.component';
import { CountryComponent } from './country.component';

const routes: Routes = [
  {
    path: 'countries',
    component: CountryListComponent
  },
  {
    path: 'add',
    component: CountryFormComponent
  },
  {
    path: 'country/:id',
    component: CountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
