import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../models/review';
import { ReviewService } from './review.service';
import { Book } from '../models/book';
import { slideUp } from '../animations';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
  animations: [ slideUp ]
})
export class ReviewListComponent implements OnInit {

  reviews: Review[];
  book: Book;
  errorMessage: string;
  bookId: number = -1;

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit() {
    this.bookId = +this.route.snapshot.paramMap.get('id');
    this.reviewService.getReviews(this.bookId).then(reviews => this.reviews = reviews);
    this.reviewService.getBook(this.bookId).then(book => this.book = book);
  }

  addReview(review:Review) {
    review.bookId = this.bookId;
    this.reviewService.addReview(review).then((r) => {  
      this.reviews.push(r); 
     }).catch(error => this.errorMessage = error);
  }
}
