import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../models/review';
import { ReviewFormComponent } from "../review-form/review-form.component";
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule, ReviewFormComponent],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent {

  bookId = -1;
  reviews!: Review[];

  getReviews(): void {
    this.reviews = this.reviewService.getReviews(this.bookId);
  }

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookId = +id;
      this.getReviews();
    }
  }


}
