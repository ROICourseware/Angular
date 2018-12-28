import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { NoEntryComponent } from './no-entry.component';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NoEntryComponent, CountryListComponent, CountryComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    BrowserAnimationsModule
  ]
})
export class CountriesModule { }
