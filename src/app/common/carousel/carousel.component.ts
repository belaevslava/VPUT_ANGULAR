import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../classes/image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: Image[];
  @Input() height: number | string;
  swiperOptions: object;
  constructor() {
      this.height = typeof this.height === 'string' ? this.height : this.height + 'px';
      this.swiperOptions = {
          lazy: {
              loadPrevNext: true
          },
          navigation: {
              nextEl: '.carousel__button_to_next',
              prevEl: '.carousel__button_to_prev',
          },
          pagination: {
              el: '.carousel__pagination',
              type: 'fraction'
          },
      };
  }

  ngOnInit() {
  }
}
