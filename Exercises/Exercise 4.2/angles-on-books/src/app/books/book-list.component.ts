import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [{
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

  constructor() { }

  ngOnInit(): void {
  }

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

}
