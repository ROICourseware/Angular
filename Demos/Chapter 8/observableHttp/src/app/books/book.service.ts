import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBooksByTitle(term: string = '') {
    if (term) {
      return this.httpClient.get<Book[]>(environment.url + "BooksByTitle/" + term).pipe(
        catchError(this.handleObservableError)
      );
    }
    else {
      return this.getBooks();
    }
  }

  getBooks() {
    return this.httpClient.get<Book[]>(environment.url + "Books").pipe(
      catchError(this.handleObservableError)
    );
  }

  addBook(book: Book) {
    return this.httpClient.post<Book>(environment.url + "Books", book).toPromise().catch(this.handleError);
  }

  private handleError(error: any) {
    let err = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';;
    return Promise.reject(err);
  }

  private handleObservableError(error: any) {
    let err = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';;
    return throwError(err);
  };
}
