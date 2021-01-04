import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './country-list.component';
import { CountryParentComponent } from './country-parent.component';
import { CountryComponent } from './country.component';

@NgModule({
  declarations: [CountryListComponent, CountryParentComponent, CountryComponent],
  imports: [
    CommonModule,
    FormsModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
