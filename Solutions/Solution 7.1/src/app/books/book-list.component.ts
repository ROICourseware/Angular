import { BookService } from './book.service';
import { BooksModule } from './books.module';
import { Component, Input, OnInit } from '@angular/core';
import Book from './../models/Book.model';


@Component({
    selector: 'book-list',
    template: `<div class="container-fluid mainPanel">
                <div class="row">
                    <h2 class="col-sm-offset-1">Books</h2>
                    <div *ngIf="errorMessage" class="alert alert-danger">
                        Sorry, there's been an error communicating with the server: {{errorMessage}}
                    </div>                     
                    <book-form (createBook)="addBook($event)"></book-form>
                    <div class="col-lg-8 col-sm-offset-1">
                        <table class="table table-border table-striped">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Cover</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let book of books;  trackBy:trackBook">
                                      <td><a [routerLink]="['/reviews/' + book.bookId]">{{book.title}}</a></td>
                                    <td>{{book.author}}</td>
                                    <td><img  src="{{book.cover | noImage}}" alt="{{book.title + ' book cover'}}" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>`
})
export class BookListComponent implements OnInit {

    books: Book[];
    errorMessage: string;
    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.getBooks();
    }

    addBook(book: Book) {
        this.bookService.addBook(book)
            .then(book => this.books.unshift(book)).catch(error => this.errorMessage = error);
    }

    getBooks() {
        this.bookService.getBooks().then(books => this.books = books).catch(error => this.errorMessage = error);
    }

    trackBook(i: number, book: Book): number {
        return book.bookId;
    }
}