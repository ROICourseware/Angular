import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './books/book-list.component';
import { AboutComponent } from './about.component';

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
  },{
    path: 'reviews',
    loadChildren: './reviews/reviews.module#ReviewsModule',
    data: { animation: 'reviewPage'}
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
