import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../classes/image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: Image[];
  @Input() maxHeight: number | string;
  options: object;
  constructor() {
  }

  ngOnInit() {
      console.log('images:', this.images);
      this.maxHeight = typeof this.maxHeight === 'string' ? this.maxHeight : this.maxHeight + 'px';
      this.options = {
          lazy: {
              loadPrevNext: true
          },
          navigation: {
              nextEl: '.carousel__button_direction_next',
              prevEl: '.carousel__button_direction_prev',
          },
          pagination: {
              el: '.carousel__pagination',
              type: 'fraction'
          },
      };
  }
}
