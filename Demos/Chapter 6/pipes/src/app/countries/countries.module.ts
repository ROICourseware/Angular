import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { NoEntryComponent } from './no-entry.component';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';

@NgModule({
  declarations: [NoEntryComponent, CountryListComponent, CountryComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
