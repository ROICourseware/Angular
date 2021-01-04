import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { CountriesRoutingModule } from './countries-routing.module';
import { NoEntryComponent } from './no-entry.component';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';
import { CountryFormComponent } from './country-form.component';
import { MockBackendService } from './mock-backend.service';

@NgModule({
  declarations: [NoEntryComponent, CountryListComponent, CountryComponent, CountryFormComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockBackendService, { dataEncapsulation: false }
    ),
  ]
})
export class CountriesModule { }
