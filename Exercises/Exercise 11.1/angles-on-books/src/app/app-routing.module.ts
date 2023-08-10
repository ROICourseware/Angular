import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { BookListComponent } from './books/book-list.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
      path: '',
      component: BookListComponent,
      data: { animation: 'bookPage'}
  },
  {
      path: 'about',
      component: AboutComponent,
      data: { animation: 'aboutPage'}
  },
  {
      path: 'faq',
      component: FaqComponent,
      data: { animation: 'faqPage'}
  },
  {
    path: '**',
    component: BookListComponent,
    data: { animation: 'defaultPage'}
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
