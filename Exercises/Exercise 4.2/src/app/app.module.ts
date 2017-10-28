import { AboutComponent } from './about.component';
import { AppRoutesModule } from './app-routes.module';
import { BooksModule } from './books/books.module';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, BooksModule, AppRoutesModule
  ],
  declarations: [
    AppComponent, AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
