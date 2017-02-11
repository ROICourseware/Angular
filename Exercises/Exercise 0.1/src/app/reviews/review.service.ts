import { RestHelperService } from './../common/rest-helper.service';
import { Injectable } from '@angular/core';
import Review from './../models/Review.model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ReviewService {

    constructor(private http: Http, private restHelper : RestHelperService) { }


    getReviews(bookId: number) {
        return this.http.get(this.restHelper.url + "Reviews/" + bookId)
            .toPromise().then(res => res.json()).catch(this.restHelper.handleError);
    }

    addReview(review: Review) {
        let headers = new Headers({
            'content-type': 'application/json'
        });
        return this.http.post(this.restHelper.url + "Reviews", review, {
            headers: headers
        }).toPromise().then(res => res.json()).catch(this.restHelper.handleError);
    }


}


