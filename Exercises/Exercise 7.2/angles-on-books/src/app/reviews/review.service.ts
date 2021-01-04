import { Injectable } from '@angular/core';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getReviews(bookId: number): Promise<Review[]> {
    return Promise.resolve(reviews);
  }

  addReview(review: Review): void {
    reviews.push(review);
  }

}

const reviews: Review[] = [{
  content: 'A towering masterpiece.',
  bookId: -1
}, {
  content: 'I hated it.',
  bookId: -1
}];


