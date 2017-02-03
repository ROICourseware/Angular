import { CountryGuard } from './country-guard.service';
import { NoEntryComponent } from './noentry.component';
import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list.component';
import { CountryFormComponent } from './country-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const countryRoutes: Routes = [
  {
    path: 'add',
    component: CountryFormComponent
  },
  {
    path: 'countries',
    component: CountryListComponent
  },
  {
    path: 'noentry',
    component: NoEntryComponent,
    canActivate: [CountryGuard]
  },
  {
    path: 'country/:id/:name',
    component: CountryComponent
  },
  {
    path: 'country/:id',
    component: CountryComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(countryRoutes) ],
  exports: [ RouterModule ]
})
export class CountryRoutesModule { }