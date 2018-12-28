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

  reviews: Review[];
  bookId: number = -1;

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit() {
    this.bookId = +this.route.snapshot.paramMap.get('id');
    this.reviewService.getReviews(this.bookId).then(reviews => this.reviews = reviews);
  }

}
