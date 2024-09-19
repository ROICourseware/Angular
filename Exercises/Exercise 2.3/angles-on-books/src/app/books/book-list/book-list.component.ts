import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  
  @Input()
  books: Book[] = [];

  trackBook(i: number, book: Book): number {
    return book.bookId;
}


}
