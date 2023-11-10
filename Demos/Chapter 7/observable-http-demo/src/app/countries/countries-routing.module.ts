import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';

const routes: Routes = [
  {
    path: 'countries',
    component: CountryListComponent
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
