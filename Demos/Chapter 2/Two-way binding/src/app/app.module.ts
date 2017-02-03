import { CountryPassedInComponent } from './books/country-passed-in.component';
import { CountryListComponent } from './books/country-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent, CountryListComponent, CountryPassedInComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
