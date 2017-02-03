import { routeChange, slideUp } from '../common/animations';
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
                                <tr>
                                    <td colspan="3">
                                        <label>Search by title: <input #term (keyup)="search(term.value)"  /></label>
                                    </td>
                                </tr>                                    
                            </thead>
                            <tbody>
                                <tr [@slideUp] *ngFor="let book of books | async; trackBy:trackBook">
                                      <td><a [routerLink]="['/reviews/' + book.bookId]">{{book.title}}</a></td>
                                    <td>{{book.author}}</td>
                                    <td><img  src="{{book.cover | noImage}}" alt="{{book.title + ' book cover'}}" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>`,
    animations: [routeChange(), slideUp()],
    host: { '[@routeChange]': '' }
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