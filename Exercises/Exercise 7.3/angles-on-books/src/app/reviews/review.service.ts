import { Injectable } from '@angular/core';
import { Review } from '../models/review';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient: HttpClient) { }

  getReviews(bookId: number): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${environment.url}/reviews/${bookId}`);
  }

  getBook(bookId: number): Observable<Book>  {
    return this.httpClient.get<Book>(`${environment.url}/books/${bookId}`);
  }

  addReview(review: Review): Observable<Review> {
    return this.httpClient.post<Review>(`${environment.url}/reviews`, review);
  }

}

