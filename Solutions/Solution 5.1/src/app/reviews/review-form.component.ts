import { ReviewsModule } from './reviews.module';
import { Component, Input, OnInit } from '@angular/core';
import Review from '../models/Review.model';

@Component({
    selector: 'review-form',
    template: `<form class="form-group form-inline col-sm-offset-1" novalidate #reviewForm="ngForm" (ngSubmit)="submit()">
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
    @Input() bookId: number;
    review: Review;
    ngOnInit() {
        this.review = new Review("", this.bookId);
    }
    submit() {
        console.log(this.review);
    }

}