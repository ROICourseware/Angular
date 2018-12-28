import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  errorMessage: string;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks(); 
  }

  addBook(book: Book) {
    this.bookService.addBook(book).then(() => {  this.getBooks();  }).catch(error => this.errorMessage = error);
  }

  getBooks() {
    this.bookService.getBooks().then(books => this.books = books).catch(error => this.errorMessage = error);
  }

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }

}
