import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesModule } from './countries/countries.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AppComponent, AboutComponent
  ],
  imports: [
    BrowserModule,
    CountriesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
