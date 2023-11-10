import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';
import { NoEntryComponent } from './no-entry.component';
import { canActivate } from './countries.guard';
import { CountryParentComponent } from './country-parent.component';

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
  },
  {
    path: 'noentry',
    component: NoEntryComponent,
    canActivate: [canActivate]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
