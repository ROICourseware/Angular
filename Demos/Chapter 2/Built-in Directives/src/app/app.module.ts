import { CountryPassedInComponent } from './books/country-passed-in.component';
import { CountryListComponent } from './books/country-list.component';
import { BookListComponent } from './books/book-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, BookListComponent, CountryListComponent, CountryPassedInComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
