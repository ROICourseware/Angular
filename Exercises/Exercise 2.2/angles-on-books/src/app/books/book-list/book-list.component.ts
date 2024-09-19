import { Component } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  
  book: Book = {
    title: 'The Lord Of The Rings',
    author: 'J R R Tolkien' ,
    cover: '',
    bookId: 1
  };

}
