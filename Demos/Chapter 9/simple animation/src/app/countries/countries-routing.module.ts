import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list.component';
import { NoEntryComponent } from './no-entry.component';
import { CountriesGuard } from './countries.guard';
import { CountryComponent } from './country.component';


const routes: Routes = [
  {
    path: 'countries',
    component: CountryListComponent
  },
  {
    path: 'noentry',
    component: NoEntryComponent,
    canActivate: [CountriesGuard]
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule {

}
