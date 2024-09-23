import { Routes } from '@angular/router';
import { REVIEWS_ROUTES } from './reviews/reviews.routes';
import { BOOKS_ROUTES } from './books/books.routes';

export const routes: Routes = [
    ...BOOKS_ROUTES,
    ...REVIEWS_ROUTES,
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
        data: { animation: 'aboutPage'}
    },
    {
      path: '**',
      loadComponent: () => import('./books/book-list/book-list.component').then(m => m.BookListComponent),
      data: { animation: 'defaultPage'}
    }];
