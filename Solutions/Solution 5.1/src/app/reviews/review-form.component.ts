import { ReviewsModule } from './reviews.module';
import { Component, Input, OnInit } from '@angular/core';
import Review from '../models/Review.model';

@Component({
    selector: 'review-form',
    templateUrl: './review-form.component.html'
})
export class ReviewFormComponent implements OnInit {
    @Input() bookId: number;
    review: Review;
    ngOnInit() {
        this.review = new Review("", this.bookId);
    }
    submit() {
        console.log(this.review);
    }

}