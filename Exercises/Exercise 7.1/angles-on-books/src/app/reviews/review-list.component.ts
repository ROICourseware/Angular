import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../models/review';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  bookId = -1;
  reviews: Review[] = [];

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
     this.bookId = +id;
     this.reviewService.getReviews(this.bookId).then(reviews => this.reviews = reviews);
    }
  }



}
