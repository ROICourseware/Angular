import { Component, Input } from '@angular/core';
import Book from './../models/Book.model';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html'
})
export class BookListComponent {
    
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

    addBook(book: Book) {
        this.books.push(book);
    }

    trackBook(i: number, book: Book): number {
        return book.bookId;
    }
}