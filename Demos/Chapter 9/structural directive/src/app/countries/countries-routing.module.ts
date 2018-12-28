import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list.component';
import { NoEntryComponent } from './no-entry.component';
import { CountriesGuard } from './countries.guard';
import { CountryComponent } from './country.component';
import { CountryParentComponent } from './country-parent.component';
import { CountryFormComponent } from './country-form.component';


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
export class CountriesRoutingModule { 




}
