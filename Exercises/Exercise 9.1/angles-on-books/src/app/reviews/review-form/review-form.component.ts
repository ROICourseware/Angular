import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from '../../models/review';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent {

  @Input() bookId = 0;
  review!: Review;
  @Output() createReview = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.review = new Review('', this.bookId);
  }

  submit(): void {
    this.createReview.emit(this.review);
  }


}
