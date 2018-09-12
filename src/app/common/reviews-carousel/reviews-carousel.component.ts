import {Component, OnChanges, Input} from '@angular/core';
import $ from 'jquery';
import * as slick from 'slick-carousel';

import { Review } from '../../classes/review';

@Component({
  selector: 'app-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.scss']
})
export class ReviewsCarouselComponent implements OnChanges {
  @Input() reviews: Review[];
  usedPlugins: Object;
  constructor() {
      this.usedPlugins = { slick: slick };
  }

  ngOnChanges() {
    setTimeout(_ => $('.reviews-carousel[data-slick]').slick(), 1);
  }
}
