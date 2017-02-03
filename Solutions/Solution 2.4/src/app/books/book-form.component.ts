import { Component, Output, EventEmitter } from '@angular/core';
import Book from './../models/Book.model';

@Component({
    selector: 'book-form',
    template: `<div>
                Title:<input type="text" [(ngModel)]="book.title" />
		        Author:<input type="text" [(ngModel)]="book.author" />
      		    <button type="button" (click)="add()">Add Book</button>
                </div>`
})
export class BookFormComponent {


private book: Book = new Book("","","", -1);

 @Output() createBook  = new EventEmitter();

 add() {
      this.createBook.emit(this.book);
      this.book = new Book("","","", -1);
 }

}