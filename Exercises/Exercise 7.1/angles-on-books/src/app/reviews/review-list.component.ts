import { ReviewService } from './review.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../models/review';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  bookId = -1;
  reviews!: Review[];

  getReviews(): void {
    this.reviews = this.reviewService.getReviews(this.bookId);
  }

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
     this.bookId = +id;
     this.getReviews();
    }
  }

}
