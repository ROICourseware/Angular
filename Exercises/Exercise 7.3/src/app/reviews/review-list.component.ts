import { BookService } from './../books/book.service';
import { ReviewService } from './review.service';
import { ReviewFormComponent } from './review-form.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Review from '../models/Review.model';
import Book from '../models/Book.model';

@Component({
    selector: 'review-list',
    template: `<div class="container-fluid mainPanel">    
                 <div *ngIf="errorMessage" class="alert alert-danger">
                        Sorry, there's been an error communicating with the server: {{errorMessage}}
                 </div>  
                <div class="row">
                  <div class="col-sm-offset-1 col-sm-3">
                       <h2>{{book?.title}} <br>
                       by {{book?.author}}</h2>
                   </div>
                    <div class="col-sm-3">
                       <img  src="{{book?.cover | noImage }}" alt="{{book?.title + ' book cover'}}" />
                    </div>  
                </div>               
                 <div class="row">
                    <h2 class="col-sm-offset-1">Reviews for {{book?.title}}</h2>
                    <review-form [bookId]=bookId (reviewAdded)="getReviews()"></review-form>
                    <div class="col-lg-8 col-sm-offset-1">
                        <table class="table table-border table-striped">
                            <thead>
                                <tr>
                                    <th>Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let review of reviews">
                                      <td>{{review.content}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>`
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