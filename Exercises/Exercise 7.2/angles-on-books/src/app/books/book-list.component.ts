import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books!: Book[];
  errorMessage = '';

  constructor(private bookService: BookService) { }

  showError(error: any): void {
    this.errorMessage = error.message ? error.message : 
                        error.status ? `${error.status} - ${error.statusText}` :
                        'Server error';
  }

  getBooks(): void {
    this.bookService.getBooks()
      .pipe(catchError(err => {
        this.showError(err);
        return of([]);
      }))
      .subscribe(books => this.books = books);
  }

  addBook(book: Book): void {
    this.bookService.addBook(book)
      .pipe(catchError(err => {
        this.showError(err);
        return of({});
      }))
      .subscribe(() => this.getBooks());
  }

  ngOnInit(): void {
    this.getBooks();
  }

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }



}
