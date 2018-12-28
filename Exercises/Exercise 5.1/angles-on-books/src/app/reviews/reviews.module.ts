import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewListComponent } from './review-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ],
  declarations: [ReviewListComponent]
})
export class ReviewsModule { }
