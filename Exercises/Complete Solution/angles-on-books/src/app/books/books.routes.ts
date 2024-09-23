import { Routes } from "@angular/router";

export const BOOKS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./book-list/book-list.component').then(m => m.BookListComponent),
        data: { animation: 'bookPage'}
    }];
