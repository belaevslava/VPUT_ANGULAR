import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.scss']
})
export class ReviewRatingComponent implements OnInit {
  @Input() rate: number;
  constructor() { }

  ngOnInit() {
  }

}
