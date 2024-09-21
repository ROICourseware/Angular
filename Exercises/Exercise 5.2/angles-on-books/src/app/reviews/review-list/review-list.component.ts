import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../models/review';
import { ReviewFormComponent } from "../review-form/review-form.component";

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule, ReviewFormComponent],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent {

  bookId = -1;
  reviews: Review[] = [{
    content: 'A towering masterpiece.',
                  bookId: this.bookId
  }, {
    content: 'I hated it.',
                  bookId: this.bookId
  }];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookId = +id;
    }
  }


}
