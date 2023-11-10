import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';
import { CountryFormComponent } from './country-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockBackendService } from './mock-backend.service';
import { CountryListChildrenComponent } from './country-list-children.component';
import { CountryChildComponent } from './country-child.component';


@NgModule({
  declarations: [CountryListComponent, CountryComponent, CountryFormComponent,
     CountryListChildrenComponent, CountryChildComponent],
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
