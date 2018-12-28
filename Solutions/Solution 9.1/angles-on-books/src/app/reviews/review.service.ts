import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient: HttpClient) { }

  getReviews(bookId:number) {
    return this.httpClient.get<Review[]>(environment.url + "Reviews/" + bookId).toPromise().catch(this.handleError);
  }

  getBook(bookId:number) {
    return this.httpClient.get<Book>(environment.url + "Books/" + bookId).toPromise().catch(this.handleError);
  }

  addReview(review: Review) {
    return this.httpClient.post<Review>(environment.url + "Reviews", review).toPromise().catch(this.handleError);
  }

  private handleError(error: any) {
    let err = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Promise.reject(err);
  }

}

