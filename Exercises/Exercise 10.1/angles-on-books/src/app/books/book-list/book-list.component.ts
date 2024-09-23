import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from "../book-form/book-form.component";
import { RouterLink } from '@angular/router';
import { NoImagePipe } from '../../shared/no-image.pipe';
import { BookService } from '../book.service';
import { catchError, debounceTime, Observable, of } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { slideUp } from '../../shared/animations';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookFormComponent, RouterLink, NoImagePipe, ReactiveFormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  animations: [ slideUp ]
})
export class BookListComponent {

  constructor(private bookService: BookService) { }

  books$!: Observable<Book[]>;
  errorMessage = '';
  searchField: FormControl = new FormControl();
  sub: any;

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

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }


  showError(error: any): void {
    this.errorMessage = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` :
        'Server error';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
