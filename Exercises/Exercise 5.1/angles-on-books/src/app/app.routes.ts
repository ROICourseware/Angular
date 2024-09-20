import { Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: BookListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
      path: '**',
      component: BookListComponent
    }];
