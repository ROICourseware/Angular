import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
      path: '',
      component: AboutComponent
  },
  {
      path: 'faq',
      component: FaqComponent
  },
  {
    path: '**',
    component: AboutComponent
  }];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
