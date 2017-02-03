import { ReviewFormComponent } from './review-form.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Review from '../models/Review.model';

@Component({
    selector: 'review-list',
    template: `<div class="container-fluid mainPanel">
                <div class="row">
                    <h2 class="col-sm-offset-1">Reviews for {{bookId}}</h2>
                    <review-form [bookId]=bookId></review-form>
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
    
    bookId: number = -1;

    reviews: Review[] = [{
							content: "A towering masterpiece.",
                            bookId: this.bookId
						},{
							content: "I hated it.",
                            bookId: this.bookId
						}];
		
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.bookId = +this.route.snapshot.params['id'];
    }
}