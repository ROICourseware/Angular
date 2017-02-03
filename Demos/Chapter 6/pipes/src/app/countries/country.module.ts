import { CountryComponent } from './country.component';
import { CountryRoutesModule } from './country-routes.module';
import { CountryFormComponent } from './country-form.component';
import { CountryListComponent } from './country-list.component';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule, CountryRoutesModule ],
  declarations: [  CountryListComponent, CountryFormComponent, CountryComponent ],
  exports: [CountryListComponent, CountryFormComponent]
})
export class CountryModule { }
