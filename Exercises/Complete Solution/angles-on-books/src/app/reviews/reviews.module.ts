import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewListComponent } from './review-list.component';
import { ReviewFormComponent } from './review-form.component';


@NgModule({
  declarations: [ReviewListComponent, ReviewFormComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    FormsModule
  ]
})
export class ReviewsModule { }
