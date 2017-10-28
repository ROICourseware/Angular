import Book from './models/Book.model';
import { BookListComponent } from './books/book-list.component';
import { Component } from '@angular/core';
import '../assets/css/bootstrap.min.css';
import '../assets/css/styles.css';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angles On Books';
  
  books: Book[] = [{
    title: "The Lord Of The Rings",
    author: "J R R Tolkien",
    cover: "",
    bookId: 1
  }, {
    title: "The Hobbit",
    author: "J R R Tolkien",
    cover: "",
    bookId: 2
  }];
}


