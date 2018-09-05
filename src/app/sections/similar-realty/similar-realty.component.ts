import { Component, OnInit } from '@angular/core';

import { Realty } from '../../classes/realty';
import { RealtyService } from '../../services/realty.service';

@Component({
  selector: 'app-similar-realty',
  templateUrl: './similar-realty.component.html',
  styleUrls: ['./similar-realty.component.scss']
})
export class SimilarRealtyComponent implements OnInit {
  similarRealty: Realty[];
  constructor(private realtyService: RealtyService) { }

  ngOnInit() {
    this.getSimilarRealty();
  }

  getSimilarRealty() {
    this.realtyService.getBestRealty().subscribe(similarRealty => {
      this.similarRealty = similarRealty;
      console.log('similarRealty', similarRealty);
    });
  }
}