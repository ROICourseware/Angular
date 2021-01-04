import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesModule } from './countries/countries.module';
import { StandardPipesComponent } from './pipes/standard-pipes.component';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StandardPipesComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
