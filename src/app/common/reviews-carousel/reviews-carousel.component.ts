import {Component, OnInit, Input} from '@angular/core';

import { Review } from '../../classes/review';

@Component({
  selector: 'app-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.scss']
})
export class ReviewsCarouselComponent implements OnInit {
  @Input() reviews: Review[];
  swiperOptions: object;
  constructor() {
      this.swiperOptions = {
          navigation: {
              nextEl: '.reviews-carousel__button_to_next',
              prevEl: '.reviews-carousel__button_to_prev',
          }
      };
  }

  ngOnInit() {
  }
}
