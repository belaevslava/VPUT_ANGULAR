import { Component, OnInit } from '@angular/core';

import $ from 'jquery';

@Component({
  selector: 'app-reviews-slider',
  templateUrl: './reviews-slider.component.html',
  styleUrls: ['./reviews-slider.component.scss']
})
export class ReviewsSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.reviews-slider').slick();
  }

}
