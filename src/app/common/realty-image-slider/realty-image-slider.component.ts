import { Component, OnChanges, Input } from '@angular/core';
import $ from 'jquery';
import * as slick from 'slick-carousel';
import { Image } from '../../classes/image';

@Component({
  selector: 'app-realty-image-slider',
  templateUrl: './realty-image-slider.component.html',
  styleUrls: ['./realty-image-slider.component.scss']
})
export class RealtyImageSliderComponent implements OnChanges {
  @Input() images: Image[];
  usedPlugins: Object;
  constructor() {
      this.usedPlugins = { slick: slick };
  }

  ngOnChanges() {
    if (this.images) {
      setTimeout(_ => {
          $('.realty-image-slider__images[data-slick]').slick({
              asNavFor: '.realty-image-slider__nav'
          });
          $('.realty-image-slider__nav[data-slick-nav]').slick({
              slidesToShow: 8,
              arrows: false,
              asNavFor: '.realty-image-slider__images',
              centerMode: true,
              focusOnSelect: true
          });
      }, 1);
    }
  }
}
