import { ReviewService } from './review.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Review from '../models/Review.model';

@Component({
    selector: 'review-list',
    templateUrl: './review-list.component.html'
}) 
export class ReviewListComponent implements OnInit {
    
    reviews: Review[];
    bookId: number = -1;

    constructor(private route: ActivatedRoute, private reviewService: ReviewService) {}

    ngOnInit() {
        this.bookId = +this.route.snapshot.params['id'];
        this.reviewService.getReviews(this.bookId).then(reviews => this.reviews = reviews);
    }
}