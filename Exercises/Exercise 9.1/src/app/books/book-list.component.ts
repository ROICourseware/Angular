import { BookService } from './book.service';
import { BooksModule } from './books.module';
import { Component, Input } from '@angular/core';
import Book from './../models/Book.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html'
})
export class BookListComponent {

    searchTermStream: BehaviorSubject<string> = new BehaviorSubject<string>("");
    books: Observable<Book[]> = this.searchTermStream
        .debounceTime(500)
        .switchMap((term: string) => this.bookService.getBooksByTitle(term))
        .catch(error => this.errorMessage = error);

    errorMessage: string;
    constructor(private bookService: BookService) { }

    search(term: string) {
        this.searchTermStream.next(term);
    }

    addBook(book: Book) {
        this.bookService.addBook(book).then(() => {
            this.search("");
        }).catch(error => this.errorMessage = error);
    }
    trackBook(i: number, book: Book): number {
        return book.bookId;
    }
}