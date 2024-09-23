import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../models/review';
import { ReviewFormComponent } from "../review-form/review-form.component";
import { ReviewService } from '../review.service';
import { Book } from '../../models/book';
import { catchError, Observable, of } from 'rxjs';
import { slideUp } from '../../shared/animations';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule, ReviewFormComponent],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css',
  animations: [ slideUp ]
})
export class ReviewListComponent {

  bookId = -1;
  reviews$!: Observable<Review[]>;
  book$!: Observable<Book>;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) { }


  showError(error: any): void {
    this.errorMessage = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` :
        'Server error';
  }

  getReviews(): void {
    this.reviews$ = this.reviewService.getReviews(this.bookId)
    .pipe(catchError(err => {
      this.showError(err);
      return of([]);
    }));
  }

  getBook(): void {
    this.book$ = this.reviewService.getBook(this.bookId)
    .pipe(catchError(err => {
      this.showError(err);
      return of(new Book('', '', '', 0));
    }));
  }

  addReview(review: Review): void {
    review.bookId = this.bookId;
    this.reviewService.addReview(review)
    .pipe(catchError(err => {
      this.showError(err);
      return of(new Review('', 0));
    })).subscribe({
      next: response => {
        console.log('Review added successfully', response);
        this.getReviews();
      }
    });
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
