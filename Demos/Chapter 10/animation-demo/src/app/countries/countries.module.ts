import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './country-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [CountryListComponent],
  exports: [CountryListComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ]
})
export class CountriesModule { }
