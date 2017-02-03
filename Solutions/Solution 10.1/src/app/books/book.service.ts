import { Observable } from 'rxjs/Observable';
import { RestHelperService } from './../common/rest-helper.service';
import { Injectable } from '@angular/core';
import Book from './../models/Book.model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

    constructor(private http: Http, private restHelper: RestHelperService) { }

    getBooks() {
        return this.http.get(this.restHelper.url + "Books")
            .map(res => res.json());
    }

    getBooksByTitle(title: string) {
        if (title) {
            return this.http.get(this.restHelper.url + "BooksByTitle/" + title)
                .map(res => res.json());
        }
        else {
            return this.getBooks();
        }
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

    private handleObservableError(error: any) {
        return Observable.throw(this.restHelper.buildErrorString(error));
    }

}