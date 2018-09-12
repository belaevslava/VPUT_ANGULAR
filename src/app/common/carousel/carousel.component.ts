import { Component, OnChanges, Input } from '@angular/core';
import $ from 'jquery';
import * as slick from 'slick-carousel';
import { Image } from '../../classes/image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnChanges {
  @Input() images: Image[];
  usedPlugins: Object;
  constructor() {
      this.usedPlugins = { slick: slick };
  }

  ngOnChanges() {
    if (this.images) {
      setTimeout(_ => {
          $('.carousel__images[data-slick]').slick({
              asNavFor: '.carousel__nav'
          });
          $('.carousel__nav[data-slick-nav]').slick({
              slidesToShow: 8,
              arrows: false,
              asNavFor: '.carousel__images',
              centerMode: true,
              focusOnSelect: true
          });
      }, 1);
    }
  }
}