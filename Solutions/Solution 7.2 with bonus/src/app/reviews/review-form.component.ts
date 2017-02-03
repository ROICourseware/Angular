import { ReviewService } from './review.service';
import { ReviewsModule } from './reviews.module';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import Review from '../models/Review.model';

@Component({
    selector: 'review-form',
    template: `<div *ngIf="errorMessage" class="alert alert-danger">
                        Sorry, there's been an error communicating with the server: {{errorMessage}}
                 </div>
                <form class="form-group form-inline col-sm-offset-1" novalidate #reviewForm="ngForm" name="reviewForm" (ngSubmit)="submit()">
                    <label class="control-label">Review:
                    <input class="form-control" required minlength="5" type="text" name="content" #content="ngModel" [(ngModel)]="review.content" />
                    </label>
                    <button class="btn btn-primary" [disabled]="!reviewForm.form.valid" type="submit">Add Review</button>
                   <div *ngIf="!(content.valid || content.pristine)">
                     <div *ngIf="content.errors.required" class="alert alert-danger">
                        Review must have content
                    </div>
                    <div *ngIf="content.errors.minlength" class="alert alert-danger">
                        Review must be at least 5 characters long
                    </div>
                  </div>
                </form>`
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