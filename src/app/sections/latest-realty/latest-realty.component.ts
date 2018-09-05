import { Component, OnInit } from '@angular/core';

import { Realty } from '../../classes/realty';
import { RealtyService } from '../../services/realty.service';

@Component({
  selector: 'app-latest-realty',
  templateUrl: './latest-realty.component.html',
  styleUrls: ['./latest-realty.component.scss']
})
export class LatestRealtyComponent implements OnInit {
  latestRealty: Realty[];
  constructor(private realtyService: RealtyService) { }

  ngOnInit() {
    this.getLatestRealty();
  }

  getLatestRealty(): void {
    this.realtyService.getLatestRealty().subscribe(latestRealty => {
      this.latestRealty = latestRealty;
    });
  }

}
