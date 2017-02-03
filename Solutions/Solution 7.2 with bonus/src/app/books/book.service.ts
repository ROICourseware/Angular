import { RestHelperService } from './../common/rest-helper.service';
import { Injectable } from '@angular/core';
import Book from './../models/Book.model';
import { Http, Headers } from '@angular/http';

@Injectable()
export class BookService {

    constructor(private http: Http, private restHelper : RestHelperService) { }

    getBooks() {
        return this.http.get(this.restHelper.url + "Books")
            .toPromise().then(res => res.json() as Book[]);
    }

    getBook(bookId: number) {
        return this.http.get(this.restHelper.url + "Book/" + bookId)
            .toPromise().then(res => res.json() as Book).catch(this.restHelper.handleError);
    }

    addBook(book: Book) {
        let headers = new Headers({
            'content-type': 'application/json'
        });

        return this.http.post(this.restHelper.url + "Books", book, {
            headers: headers
        }).toPromise()
            .then(res => res.json() as Book).catch(this.restHelper.handleError);

    }

}