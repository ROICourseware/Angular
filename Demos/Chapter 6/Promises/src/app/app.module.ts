import { ReversePipe } from './reverse.pipe';
import { CountryModule } from './countries/country.module';
import { AppRoutesModule } from './app-routes.module';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';


@NgModule({
  imports: [
    BrowserModule, CountryModule, AppRoutesModule
  ],
  declarations: [
    AppComponent, AboutComponent, ReversePipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
