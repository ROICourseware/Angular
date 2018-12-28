import { NgModule } from '@angular/core';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewListComponent } from './review-list.component';
import { ReviewFormComponent } from './review-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReviewsRoutingModule,
    FormsModule 
  ],
  declarations: [ReviewListComponent, ReviewFormComponent]
})
export class ReviewsModule { }
