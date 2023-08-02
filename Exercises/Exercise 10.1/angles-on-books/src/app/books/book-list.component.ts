import { BookService } from './book.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { catchError, debounceTime, Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books$!: Observable<Book[]>;
  errorMessage = '';
  searchField: FormControl = new FormControl();
  sub: any;

  constructor(private bookService: BookService) { }

  showError(error: any): void {
    this.errorMessage = error.message ? 
                        error.message : 
                        error.status ? 
                          `${error.status} - ${error.statusText}` :
                          'Server error';
  }

  getBooks(term: any = ''): void {
    this.books$ = this.bookService.getBooks(term)
      .pipe(catchError(err => {
        this.showError(err);
        return of([]);
      }));
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
    this.sub = this.searchField.valueChanges.pipe(
      debounceTime(500))
      .subscribe({
        next: this.getBooks.bind(this),
        error: this.showError.bind(this)
     });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }



}
