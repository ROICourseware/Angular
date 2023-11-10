import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';;
import { NoEntryComponent } from './no-entry.component';
import { CountryParentComponent } from './country-parent.component';


@NgModule({
  declarations: [CountryListComponent, CountryComponent, CountryParentComponent,
     NoEntryComponent],
  exports: [CountryListComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
