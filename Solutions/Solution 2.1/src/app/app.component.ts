import { BookListComponent } from './books/book-list.component';
import { Component } from '@angular/core';
import '../../public/css/bootstrap.min.css';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{name}}</h1>
             <book-list></book-list>`
})
export class AppComponent {
  name = "Angles On Books";
 }
