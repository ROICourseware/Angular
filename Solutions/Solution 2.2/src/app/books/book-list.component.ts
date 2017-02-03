import { Component, Input } from '@angular/core';
import Book from '../models/Book.model';

@Component({
    selector: 'book-list',
    template: `<div class="container-fluid mainPanel">
                    <div class="row">
                        <h2 class="col-sm-offset-1">Books</h2>
                        <div class="col-lg-8 col-sm-offset-1">
                            <table class="table table-border table-striped">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Author</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr *ngFor="let book of books; let i = index;  let even = even; let odd = odd; trackBy:trackBook">
                                        <td>{{book.title}} odd = {{odd}} and index = {{i}} </td>
                                        <td>{{book.author}} even = {{even}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`
})
export class BookListComponent {

    @Input() books: Book[];

    trackBook(i: number, book: Book): number {
        return book.bookId;
    }

}