import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFormComponent } from './country-form.component';

@NgModule({
  imports: [
    
    FormsModule,
    CommonModule
  ],
  declarations: [CountryFormComponent],
  exports: [CountryFormComponent]
})
export class CountriesModule { }
