import { Component, OnInit } from '@angular/core';

import { Review } from '../../classes/review';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'app-latest-reviews',
  templateUrl: './latest-reviews.component.html',
  styleUrls: ['./latest-reviews.component.scss']
})
export class LatestReviewsComponent implements OnInit {
  latestReviews: Review[];
  constructor(private latestReviewsService: ReviewsService) { }

  ngOnInit() {
    this.getLatestReviews();
  }

  getLatestReviews(): void {
    this.latestReviewsService.getLatestReviews()
        .subscribe(latestReviews => {
          this.latestReviews = latestReviews;
          console.log('latestReviews', latestReviews);
        });
  }

}
