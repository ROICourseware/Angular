import { ReviewService } from './review.service';
import { ReviewsModule } from './reviews.module';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Review from '../models/Review.model';

@Component({
    selector: 'review-form',
    templateUrl: './review-form.component.html'
})
export class ReviewFormComponent implements OnInit {
    @Output() reviewAdded = new EventEmitter();
    @Input() bookId: number;
    errorMessage: string;
    review: Review;

    constructor(private reviewService: ReviewService) { }
    
    ngOnInit() {
        this.review = new Review("", this.bookId);
    }

    submit() {
        this.errorMessage = "";
        this.reviewService.addReview(this.review)
            .then(() => { this.reviewAdded.emit(); })
            .catch(error => this.errorMessage = error);
    }

}