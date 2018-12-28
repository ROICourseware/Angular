import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountriesRoutingModule } from './countries-routing.module';
import { NoEntryComponent } from './no-entry.component';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';
import { CountriesService } from './countries.service';
import { CountryFormComponent } from './country-form.component';
import { CountryParentComponent } from './country-parent.component';

@NgModule({
  declarations: [NoEntryComponent, CountryListComponent, CountryComponent, CountryFormComponent, CountryParentComponent],
  imports: [
    CommonModule,
    FormsModule,
    CountriesRoutingModule
  ],
  providers: [CountriesService]
})
export class CountriesModule { }
