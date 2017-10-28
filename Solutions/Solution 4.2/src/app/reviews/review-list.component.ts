import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Review from '../models/Review.model';

@Component({
    selector: 'review-list',
    templateUrl: './review-list.component.html'
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