import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewListComponent } from './review-list.component';
import { ReviewFormComponent } from './review-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    FormsModule 
  ],
  declarations: [ReviewListComponent, ReviewFormComponent]
})
export class ReviewsModule { }
