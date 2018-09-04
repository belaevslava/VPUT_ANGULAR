import { Component, OnInit, Input } from '@angular/core';
import $ from 'jquery';
import * as slick from 'slick-carousel';

import { Image } from '../../classes/image';

@Component({
  selector: 'app-offer-item-carousel',
  templateUrl: './offer-item-carousel.component.html',
  styleUrls: ['./offer-item-carousel.component.scss']
})
export class OfferItemCarouselComponent implements OnInit {
  @Input() images: Image[];
  usedPlugins: Object;
  constructor() {
      this.usedPlugins = { slick: slick };
  }

  ngOnInit() {
  }

  onActivate(event) {
    if (!this.images) { return false; }
    const targetElement = $(event.target);
    const $slick = targetElement
          .siblings('[data-slick]')
          .css('backgroundImage', 'none')
          .slick({
              swipe: false
          });
    if (targetElement.hasClass('.offer-item-carousel__arrow_slide_next')) {
        $slick.slick('slickNext');
    } else {
        $slick.slick('slickPrev');
    }
    targetElement.siblings('.offer-item-carousel__arrow').remove();
    targetElement.remove();
  }
}
