import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { NoEntryComponent } from './no-entry.component';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';
import { CountryFormComponent } from './country-form.component';

@NgModule({
  declarations: [NoEntryComponent, CountryListComponent, CountryComponent, CountryFormComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    FormsModule
  ]
})
export class CountriesModule { }
