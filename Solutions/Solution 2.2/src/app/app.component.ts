import Book from './models/Book.model';
import { BookListComponent } from './books/book-list.component';
import { Component } from '@angular/core';
import '../../public/css/bootstrap.min.css';
import '../../public/css/styles.css';


@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{name}}</h1>
             <book-list [books]=books></book-list>`,
})
export class AppComponent  { 
  name = 'Angles On Books';
  books: Book[] = [{
			title: "The Lord Of The Rings",
			author: "J R R Tolkien",
      cover: "",
      bookId: 1
		},{
			title: "The Hobbit",
			author: "J R R Tolkien",
      cover: "",
      bookId: 2
		}];
 }


