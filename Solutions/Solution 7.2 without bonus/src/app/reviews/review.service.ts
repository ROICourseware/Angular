import { Injectable } from '@angular/core';
import Review from './../models/Review.model';
import { Http, Headers } from '@angular/http';


@Injectable()
export class ReviewService {

    constructor(private http: Http) { }

    private url: string = "http://localhost:3000/api/bookreactions/";

    getReviews(bookId: number) {
        return this.http.get(this.url + "Reviews/" + bookId)
            .toPromise().then(res => res.json()).catch(this.handleError);
    }



    private handleError(error: any) {
        let err = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Promise.reject(err);
    }

}


