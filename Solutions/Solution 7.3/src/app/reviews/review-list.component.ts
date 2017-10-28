import { BookService } from './../books/book.service';
import { ReviewService } from './review.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Review from '../models/Review.model';
import Book from '../models/Book.model';

@Component({
    selector: 'review-list',
    templateUrl: './review-list.component.html'
}) 
export class ReviewListComponent implements OnInit {
    
    book: Book;
    errorMessage: string;
    reviews: Review[];
    bookId: number = -1;

    constructor(private route: ActivatedRoute,
        private reviewService: ReviewService,
        private bookService: BookService) { }

    ngOnInit() {
        this.bookId = +this.route.snapshot.params['id'];
        this.bookService.getBook(this.bookId).then(book => this.book = book).catch(error => this.errorMessage = error);
        this.getReviews();
      }

    getReviews() {
      this.reviewService.getReviews(this.bookId).then(reviews => this.reviews = reviews).catch(error => this.errorMessage = error);
    }
}