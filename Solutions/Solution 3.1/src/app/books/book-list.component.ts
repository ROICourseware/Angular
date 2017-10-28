import { Component, Input } from '@angular/core';
import Book from './../models/Book.model';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html'
})
export class BookListComponent {

    @Input() books: Book[];

    addBook(book: Book) {
        this.books.push(book);
    }

    trackBook(i: number, book: Book): number {
        return book.bookId;
    }
}