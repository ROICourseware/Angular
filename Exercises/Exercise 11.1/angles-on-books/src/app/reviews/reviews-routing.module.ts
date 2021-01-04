import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewListComponent } from './review-list.component';

const routes: Routes = [{
  path: 'reviews/:id',
  component: ReviewListComponent,
  data: { animation: 'reviewPage'}
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
