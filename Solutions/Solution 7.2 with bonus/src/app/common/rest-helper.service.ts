import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class RestHelperService {

    url: string = "http://localhost:3000/api/bookreactions/";

    headers = new Headers({
            'content-type': 'application/json'
        });

    handleError(error: any) {
        let err = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Promise.reject(err);
    }

}