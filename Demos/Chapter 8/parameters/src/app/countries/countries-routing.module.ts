import { CountryListChildrenComponent } from './country-list-children.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';
import { CountryChildComponent } from './country-child.component';

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
  },
  {
  path: 'countrylist',
  component: CountryListChildrenComponent,
  children: [
    {
      path: ':id',
      component: CountryChildComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
