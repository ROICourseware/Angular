import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books!: Book[];

  constructor(private bookService: BookService) { }

  getBooks(): void {
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {
    this.getBooks();
  }

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }

  addBook(book: Book): void {
    this.bookService.addBook(book);
    this.getBooks();
  }

}
