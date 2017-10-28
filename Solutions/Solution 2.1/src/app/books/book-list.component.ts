import { Component } from '@angular/core';
import Book from '../models/Book.model';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html'
})
export class BookListComponent {

 book: Book = {
			title: "The Lord Of The Rings",
			author: "J R R Tolkien",
			cover: "",
			bookId: 1
		};	
		

}