import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Promise<Book[]> {
    return Promise.resolve(books);
  }

  addBook(book: Book): void {
    books.push(book);
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
