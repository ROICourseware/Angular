import { CommonModule } from '@angular/common';
import { ReviewsRoutesModule } from './reviews-routes.module';
import { ReviewListComponent } from './review-list.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ CommonModule, ReviewsRoutesModule ],
    declarations: [ReviewListComponent]
})
export class ReviewsModule {}