import { ReviewService } from './review.service';
import { FormsModule } from '@angular/forms';
import { ReviewFormComponent } from './review-form.component';
import { CommonModule } from '@angular/common';
import { ReviewsRoutesModule } from './reviews-routes.module';
import { ReviewListComponent } from './review-list.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ CommonModule, ReviewsRoutesModule, FormsModule ],
    declarations: [ReviewListComponent, ReviewFormComponent],
    providers: [ReviewService]
})
export class ReviewsModule {}