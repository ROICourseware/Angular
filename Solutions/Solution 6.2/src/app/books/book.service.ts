import { Injectable } from '@angular/core';
import Book from './../models/Book.model';


@Injectable()
export class BookService {

    getBooks() {
        return Promise.resolve(books);
    }

    addBook(book: Book) {
        books.push(book);
    }

}

const books: Book[] = [{
			title: "The Lord Of The Rings",
			author: "J R R Tolkien",
            cover: "",
            bookId: 1
		},{
			title: "The Hobbit",
			author: "J R R Tolkien",
            cover: "",
            bookId: 2
		}];