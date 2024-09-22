import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from "../book-form/book-form.component";
import { RouterLink } from '@angular/router';
import { NoImagePipe } from '../../shared/no-image.pipe';
import { BookService } from '../book.service';

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
