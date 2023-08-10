import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { BookListComponent } from './books/book-list.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
      path: '',
      component: BookListComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'faq',
      component: FaqComponent
  },
  {
    path: '**',
    component: BookListComponent
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
