import { Component } from '@angular/core';
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

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }


}
