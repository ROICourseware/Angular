import { Component } from '@angular/core';
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
                                    <tr>
                                        <td [ngClass]="{ bestSeller: book.bestSeller }" [ngStyle]="calculatedStyles">{{book.title}}</td>
                                        <td>{{book.author}}</td>
                                    </tr>
                                    <tr *ngIf="book.bestSeller">
                                        <td colspan="2">
                                            One of our best sellers
                                        </td>
                                    </tr>
                                    <tr *ngIf="!book.bestSeller">
                                        <td colspan="2">
                                            A cult classic
                                        </td>
                                    </tr>    
                                    <tr [ngSwitch]="book.author">
                                        <td colspan="2" *ngSwitchCase="'J R R Tolkien'">
                                            The man himself.
                                        </td>
                                        <td colspan="2" *ngSwitchCase="'Christopher Tolkien'">
                                            His son.
                                        </td> 
                                        <td colspan="2" *ngSwitchDefault>
                                            Somebody else altogether
                                        </td>                                         
                                    </tr>                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`,
    styles: [`.bestSeller { border-bottom: 2px solid black }`]

})
export class BookListComponent {


    book: any = {
        title: "The Lord Of The Rings",
        author: "J R R Tolkien",
        bestSeller: true
    };


    calculatedStyles = {
        color: this.book.bestSeller ? "green" : "black",
        fontWeight: this.book.bestSeller ? "bold" : "normal"
    }



}