import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient: HttpClient) { }

  getReviews(bookId: number): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${environment.url}/Reviews/${bookId}`);
  }

  getBook(bookId: number): Observable<Book>  {
    return this.httpClient.get<Book>(`${environment.url}/Books/${bookId}`);
  }

  addReview(review: Review): Observable<Review> {
    return this.httpClient.post<Review>(`${environment.url}/Reviews`, review);
  }

}



