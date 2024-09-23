import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

   constructor(private httpClient: HttpClient) { }

  getBooks(term: string = ''): Observable<Book[]> {
    if (term) {
      return this.httpClient.get<Book[]>(`${environment.url}/booksbytitle/${term}`);
    }
    return this.httpClient.get<Book[]>(`${environment.url}/books`);
  }

  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${environment.url}/books`, book);
  }


}

const books: Book[] = [{
  title: 'The Lord Of The Rings',
  author: 'J R R Tolkien',
  cover: '',
  bookId: 1
}, {
  title: 'The Hobbit',
  author: 'J R R Tolkien',
  cover: '',
  bookId: 2
}];