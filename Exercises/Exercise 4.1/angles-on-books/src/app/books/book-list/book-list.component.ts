import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from "../book-form/book-form.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookFormComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  @Input()
  books: Book[] = [];

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }


}
