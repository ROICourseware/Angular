import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book = new Book("","","", -1);
  @Output() createBook  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.createBook.emit(this.book);
    this.book = new Book("","","", -1);
  }

}
