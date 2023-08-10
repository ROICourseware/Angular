import { ReviewService } from './review.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../models/review';
import { Book } from '../models/book';
import { catchError, of } from 'rxjs';
import { slideUp } from '../animations';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
  animations: [ slideUp ]
})
export class ReviewListComponent implements OnInit {

  bookId = -1;
  reviews!: Review[];
  book!: Book;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) { }

  showError(error: any): void {
    this.errorMessage = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` :
        'Server error';
  }

  getReviews(): void {
    this.reviewService.getReviews(this.bookId)
    .pipe(catchError(err => {
      this.showError(err);
      return of([]);
    }))
    .subscribe(reviews => this.reviews = reviews);;
  }

  getBook(): void {
    this.reviewService.getBook(this.bookId)
    .pipe(catchError(err => {
      this.showError(err);
      return of(new Book('', '', '', 0));
    }))
    .subscribe(book => this.book = book);
  }

  addReview(review: Review): void {
    review.bookId = this.bookId;
    this.reviewService.addReview(review)
    .pipe(catchError(err => {
      this.showError(err);
      return of(new Review('', 0));
    }))
    .subscribe(review => this.reviews.push(review));
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookId = +id;
      this.getReviews();
      this.getBook();
    }
  }

}
