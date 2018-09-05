import {Component, OnChanges, Input} from '@angular/core';
import $ from 'jquery';
import * as slick from 'slick-carousel';

import { Review } from '../../classes/review';

@Component({
  selector: 'app-reviews-slider',
  templateUrl: './reviews-slider.component.html',
  styleUrls: ['./reviews-slider.component.scss']
})
export class ReviewsSliderComponent implements OnChanges {
  @Input() reviews: Review[];
  usedPlugins: Object;
  constructor() {
      this.usedPlugins = { slick: slick };
  }

  ngOnChanges() {
    setTimeout(_ => $('.reviews-slider[data-slick]').slick(), 1);
  }
}
