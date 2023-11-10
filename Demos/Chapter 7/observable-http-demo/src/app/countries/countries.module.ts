import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockBackendService } from './mock-backend.service';


@NgModule({
  declarations: [CountryListComponent, CountryComponent],
  exports: [CountryListComponent],
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
