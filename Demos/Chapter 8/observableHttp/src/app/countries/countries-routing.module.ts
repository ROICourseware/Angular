import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';

const routes: Routes = [
  {
    path: 'countries',
    component: CountryListComponent,
    children: [
      {
        path: ':id',
        component: CountryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule {

}
