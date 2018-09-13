import { Component, OnInit, Input } from '@angular/core';
import { Price } from '../../classes/price';

@Component({
  selector: 'app-realty-prices',
  templateUrl: './realty-prices.component.html',
  styleUrls: ['./realty-prices.component.scss']
})
export class RealtyPricesComponent implements OnInit {
  @Input() prices: Price[];
  fullYear: number;
  constructor() {
    this.fullYear = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
