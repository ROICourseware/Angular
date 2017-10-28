import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class RestHelperService {

    url: string = (process.env.ENV === 'production')
    ? "http://localhost:5555/api/bookreactions/"
    : "http://localhost:3000/api/bookreactions/";


    headers = new Headers({
            'content-type': 'application/json'
        });

    handleError(error: any) {
        return Promise.reject(this.buildErrorString(error));
    }

    buildErrorString(error: any) {
        return error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error'; 
    }

}