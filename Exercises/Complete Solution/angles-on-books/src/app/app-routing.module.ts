import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './books/book-list.component';

const routes: Routes = [
  {
      path: '',
      component: BookListComponent,
      data: { animation: 'bookPage'}
  },
  {
      path: 'about',
      loadComponent: () => import('./about.component')
                           .then(m => m.AboutComponent),
      data: { animation: 'aboutPage'}
  },
  {
      path: 'faq',
      loadComponent: () => import('./faq/faq.component')
                           .then(m => m.FaqComponent),
      data: { animation: 'faqPage'}
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module')
                        .then(m => m.ReviewsModule),
    data: { animation: 'reviewPage'}
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
