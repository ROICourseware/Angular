import { Injectable } from '@angular/core';
import Book from './../models/Book.model';
import { Http, Headers } from '@angular/http';

@Injectable()
export class BookService {

    constructor(private http: Http) { }

    private url: string = "http://localhost:3000/api/bookreactions/";

    getBooks() {
        return this.http.get(this.url + "Books")
            .toPromise().then(res => res.json() as Book[]);
    }

    getBook(bookId: number) {
        return this.http.get(this.url + "Book/" + bookId)
            .toPromise().then(res => res.json() as Book).catch(this.handleError);
    }
    
    addBook(book: Book) {
        let headers = new Headers({
            'content-type': 'application/json'
        });

        return this.http.post(this.url + "Books", book, {
            headers: headers
        }).toPromise()
            .then(res => res.json() as Book).catch(this.handleError);

    }

    private handleError(error: any) {
        let err = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Promise.reject(err);
    }

}