import { Component, Output, EventEmitter } from '@angular/core';
import Book from './../models/Book.model';

@Component({
    selector: 'book-form',
    templateUrl: './book-form.component.html'
})
export class BookFormComponent {

private book: Book = new Book("","","", -1);

 @Output() createBook  = new EventEmitter();

 add() {
      this.createBook.emit(this.book);
      this.book = new Book("","","", -1);
 }

}