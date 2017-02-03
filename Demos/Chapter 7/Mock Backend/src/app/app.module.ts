import { MockBackendService } from './countries/mock-backend.service';
import { ReversePipe } from './reverse.pipe';
import { CountryModule } from './countries/country.module';
import { AppRoutesModule } from './app-routes.module';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule, CountryModule, AppRoutesModule, HttpModule,
    InMemoryWebApiModule.forRoot(MockBackendService),
  ],
  declarations: [
    AppComponent, AboutComponent, ReversePipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
