import { BookService } from './book.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books$!: Observable<Book[]>;
  errorMessage = '';
  sub: any;
  searchField: FormControl = new FormControl();

  getBooks(term: string = ''): void {
    this.books$ = this.bookService.getBooksByTitle(term)
    .pipe(
      catchError(error => {
          if (error.error instanceof ErrorEvent) {
              this.errorMessage = `Error: ${error.error.message}`;
          } else {
              this.errorMessage = `Error: ${error.message}`;
          }
          return of([]);
      })
    );
  }

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
    this.sub = this.searchField.valueChanges.pipe(
      debounceTime(500)).subscribe(term => {
        this.getBooks(term);
      },
      err => this.errorMessage = err);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }

  addBook(book: Book): void {
    this.bookService.addBook(book).then(() => {
      this.getBooks();
     }).catch(error => this.errorMessage = error);
  }

}
