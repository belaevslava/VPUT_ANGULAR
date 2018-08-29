import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import * as slick from 'slick-carousel';

@Component({
  selector: 'app-reviews-slider',
  templateUrl: './reviews-slider.component.html',
  styleUrls: ['./reviews-slider.component.scss']
})
export class ReviewsSliderComponent implements OnInit {
  usedPlugins: Object;
  constructor() {
      this.usedPlugins = { slick: slick };
  }

  ngOnInit() {
    $('.reviews-slider[data-slick]').slick();
  }

}
