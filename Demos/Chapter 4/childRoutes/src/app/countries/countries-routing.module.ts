import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryParentComponent } from './country-parent.component';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
