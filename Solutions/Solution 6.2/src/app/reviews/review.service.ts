import { Injectable } from '@angular/core';
import Review from './../models/Review.model';


@Injectable()
export class ReviewService {

    getReviews(bookId: number) {
        return Promise.resolve(reviews);
    }

    addReview(review: Review) {
        reviews.push(review);
    }

}

const reviews: Review[] = [{
    content: "A towering masterpiece.",
    bookId: -1
}, {
    content: "I hated it.",
    bookId: -1
}];
