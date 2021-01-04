import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../models/review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  @Input()
  bookId = 0;
  review = new Review('', 0);

  constructor() { }

  ngOnInit(): void {
    this.review = new Review('', this.bookId);
  }

  submit(): void {
    console.log(this.review.content);
  }


}
