import { CountryPassedInComponent } from './country-passed-in.component';
import { CountryListComponent } from './country-list.component';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
      CountryListComponent, CountryPassedInComponent
  ],
  exports: [CountryListComponent, CountryPassedInComponent]
})
export class CountryModule { }
