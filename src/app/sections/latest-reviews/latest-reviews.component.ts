import { Component, OnInit } from '@angular/core';

import { LatestReviewsService } from './latest-reviews.service';

@Component({
  selector: 'app-latest-reviews',
  templateUrl: './latest-reviews.component.html',
  styleUrls: ['./latest-reviews.component.scss']
})
export class LatestReviewsComponent implements OnInit {
  latestReviews: Object[];
  constructor(private latestReviewsService: LatestReviewsService) { }

  ngOnInit() {
    this.getLatestReviews();
  }

  getLatestReviews(): void {
    this.latestReviewsService.getLatestReviews()
        .subscribe(latestReviews => {
          this.latestReviews = latestReviews;
          console.log(latestReviews);
        });
  }

}
