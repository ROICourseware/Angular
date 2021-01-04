import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { BookListComponent } from './books/book-list.component';

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
  path: 'reviews',
  loadChildren: () => import('./reviews/reviews.module')
                      .then(m => m.ReviewsModule),
  data: { animation: 'reviewPage'}
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
