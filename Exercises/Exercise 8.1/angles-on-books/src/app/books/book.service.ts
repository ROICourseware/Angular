import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBooks(): Promise<Book[]> {
    return this.httpClient.get<Book[]>(environment.url + 'Books').toPromise().catch(this.handleError);
  }

  addBook(book: Book): Promise<Book> {
    return this.httpClient.post<Book>(environment.url + 'Books', book).toPromise().catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    const err = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Promise.reject(err);
  }

}

