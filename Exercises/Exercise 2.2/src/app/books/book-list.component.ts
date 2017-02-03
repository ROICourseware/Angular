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
                                        <td>{{book.title}}</td>
                                        <td>{{book.author}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`
})
export class BookListComponent {

 book: Book ={
			title: "The Lord Of The Rings",
			author: "J R R Tolkien",
			cover: "",
			bookId: 1
		};	

}