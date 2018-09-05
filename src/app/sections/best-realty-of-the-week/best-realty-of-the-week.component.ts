import { Component, OnInit } from '@angular/core';

import { RealtyService } from '../../services/realty.service';
import { Realty } from '../../classes/realty';

@Component({
  selector: 'app-best-realty-of-the-week',
  templateUrl: './best-realty-of-the-week.component.html',
  styleUrls: ['./best-realty-of-the-week.component.scss']
})
export class BestRealtyOfTheWeekComponent implements OnInit {
  bestRealty: Realty[];
  constructor(private realtyService: RealtyService) { }

  ngOnInit() {
    this.getBestRealty();
  }

  getBestRealty(): void {
    this.realtyService.getBestRealty().subscribe(bestRealty => this.bestRealty = bestRealty);
  }
}
