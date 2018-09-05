import { Component, OnInit } from '@angular/core';

import { Realty } from '../../classes/realty';
import { RealtyService } from '../../services/realty.service';

@Component({
  selector: 'app-complex-realty',
  templateUrl: './complex-realty.component.html',
  styleUrls: ['./complex-realty.component.scss']
})
export class ComplexRealtyComponent implements OnInit {
  complexRealty: Realty[];
  constructor(private realtyService: RealtyService) { }

  ngOnInit() {
    this.getComplexRelaty();
  }

  getComplexRelaty() {
    this.realtyService.getLatestRealty().subscribe(complexRealty => this.complexRealty = complexRealty);
  }
}
