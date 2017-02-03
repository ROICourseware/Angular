import { CountryFormComponent } from './countries/country-form.component';
import { CountryListComponent } from './countries/country-list.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: CountryFormComponent
  },
  {
    path: '**',
    component: AboutComponent
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes/*, { useHash: true }*/)],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }