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
import { CountryListChildrenComponent } from './country-list-children.component';
import { CountryChildComponent } from './country-child.component';

@NgModule({
  declarations: [NoEntryComponent, CountryListComponent, CountryComponent, CountryFormComponent, CountryListChildrenComponent, CountryChildComponent],
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
