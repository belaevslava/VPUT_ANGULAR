import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import * as slick from 'slick-carousel';

@Component({
  selector: 'app-realty-image-slider',
  templateUrl: './realty-image-slider.component.html',
  styleUrls: ['./realty-image-slider.component.scss']
})
export class RealtyImageSliderComponent implements OnInit {
  usedPlugins: Object;
  constructor() {
      this.usedPlugins = { slick: slick };
  }

  ngOnInit() {
    $('.realty-image-slider__images-list[data-slick]').slick();
  }

}
