import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from "./books/book-list/book-list.component";
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angles On Books';

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



}
