import { Component, OnInit } from '@angular/core';

import { Review } from '../../classes/review';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-latest-reviews',
  templateUrl: './latest-reviews.component.html',
  styleUrls: ['./latest-reviews.component.scss']
})
export class LatestReviewsComponent implements OnInit {
  latestReviews: Review[];
  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getLatestReviews();
  }

  getLatestReviews(): void {
    this.reviewService.getLatestReviews()
        .subscribe(latestReviews => {
          this.latestReviews = latestReviews;
          console.log('latestReviews', latestReviews);
        });
  }

}
