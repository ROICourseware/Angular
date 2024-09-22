import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from "../book-form/book-form.component";
import { RouterLink } from '@angular/router';
import { NoImagePipe } from '../../shared/no-image.pipe';
import { BookService } from '../book.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookFormComponent, RouterLink, NoImagePipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

	constructor(private bookService: BookService) { }

  books: Book[] = [];
  errorMessage = '';

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


showError(error: any): void {
  this.errorMessage = error.message ? error.message : 
                      error.status ? `${error.status} - ${error.statusText}` :
                      'Server error';
}


}
