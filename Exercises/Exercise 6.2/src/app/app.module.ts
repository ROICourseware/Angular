import { ReviewsModule } from './reviews/reviews.module';
import { AppRoutesModule  } from './app-routes.module';
import { BooksModule } from './books/books.module';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
@NgModule({
  imports: [
    BrowserModule, BooksModule, ReviewsModule, AppRoutesModule
  ],
  declarations: [
    AppComponent, AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

