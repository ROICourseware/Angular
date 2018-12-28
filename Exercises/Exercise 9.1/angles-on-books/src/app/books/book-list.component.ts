import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from './book.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  errorMessage: string;
  searchField: FormControl = new FormControl();
  sub: any;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
    this.sub = this.searchField.valueChanges.pipe(
      debounceTime(500)).subscribe(term => {
        this.getBooks(term);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addBook(book: Book) {
    this.bookService.addBook(book).then(() => {
      this.searchField.setValue('');
    }).catch(error => this.errorMessage = error);
  }

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }

  getBooks(term: string = '') {
    this.bookService.getBooksByTitle(term).then(books => this.books = books).catch(error => this.errorMessage = error);
  }

}
