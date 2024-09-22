import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../models/review';
import { ReviewFormComponent } from "../review-form/review-form.component";
import { ReviewService } from '../review.service';
import { Book } from '../../models/book';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule, ReviewFormComponent],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent {

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
