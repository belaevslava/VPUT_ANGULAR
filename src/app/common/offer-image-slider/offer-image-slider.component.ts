import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import * as slick from 'slick-carousel';

@Component({
  selector: 'app-offer-image-slider',
  templateUrl: './offer-image-slider.component.html',
  styleUrls: ['./offer-image-slider.component.scss']
})
export class OfferImageSliderComponent implements OnInit {
  usedPlugins: Object;
  constructor() {
      this.usedPlugins = { slick: slick };
  }

  ngOnInit() {
    $('.offer-image-slider__images-list[data-slick]').slick();
  }

}
