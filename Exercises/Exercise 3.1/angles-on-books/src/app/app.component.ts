import { Component } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
