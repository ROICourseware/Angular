import { Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { REVIEWS_ROUTES } from './reviews/reviews.routes';
import { BOOKS_ROUTES } from './books/books.routes';

export const routes: Routes = [
    ...BOOKS_ROUTES,
    ...REVIEWS_ROUTES,
    {
        path: 'about',
        component: AboutComponent,
        data: { animation: 'aboutPage'}
    },
    {
      path: '**',
      component: BookListComponent,
      data: { animation: 'defaultPage'}
    }];
