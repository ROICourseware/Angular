import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewListComponent } from './review-list.component';

const reviewsRoutes: Routes = [
   {
    path: 'reviews/:id',
    component: ReviewListComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(reviewsRoutes) ],
  exports: [   RouterModule ]
})
export class ReviewsRoutesModule { }