
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {



  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${environment.url}/Books`);
  }

  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${environment.url}/Books`, book);
  }

}
