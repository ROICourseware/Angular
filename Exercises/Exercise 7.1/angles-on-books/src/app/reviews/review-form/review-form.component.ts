import { Component, Input } from '@angular/core';
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
  
  ngOnInit(): void {
    this.review = new Review('', this.bookId);
  }

  submit(): void {
    console.log(this.review.content);
  }


}
