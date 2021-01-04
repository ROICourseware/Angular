import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book: Book = {
    title: 'The Lord Of The Rings',
    author: 'J R R Tolkien' ,
    cover: '',
    bookId: 1
  };


  constructor() { }

  ngOnInit(): void {
  }

}
