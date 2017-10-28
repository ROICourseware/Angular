import { BookService } from './book.service';
import { BooksModule } from './books.module';
import { Component, Input, OnInit } from '@angular/core';
import Book from './../models/Book.model';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
    books: Book[];

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.getBooks();
    }

    addBook(book: Book) {
        this.bookService.addBook(book);
        this.getBooks();
    }

    getBooks() {
        this.bookService.getBooks().then(books => this.books = books);
    }

    trackBook(i: number, book: Book): number {
        return book.bookId;
    }
}