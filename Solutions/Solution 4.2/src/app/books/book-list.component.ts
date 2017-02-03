import { Component, Input } from '@angular/core';
import Book from './../models/Book.model';


@Component({
    selector: 'book-list',
    template: `<div class="container-fluid mainPanel">
                <div class="row">
                    <h2 class="col-sm-offset-1">Books</h2>
                    <book-form (createBook)="addBook($event)"></book-form>
                    <div class="col-lg-8 col-sm-offset-1">
                        <table class="table table-border table-striped">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let book of books;  trackBy:trackBook">
                                      <td><a [routerLink]="['/reviews/' + book.bookId]">{{book.title}}</a></td>
                                    <td>{{book.author}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>`
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