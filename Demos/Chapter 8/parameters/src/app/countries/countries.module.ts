import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';
import { CountryListChildrenComponent } from './country-list-children.component';
import { CountryChildComponent } from './country-child.component';

@NgModule({
  declarations: [CountryListComponent, CountryComponent, CountryListChildrenComponent, CountryChildComponent],
  imports: [
    CommonModule,
    FormsModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
