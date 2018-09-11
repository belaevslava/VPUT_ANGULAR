import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RealtyService } from '../../../services/realty.service';
import { Realty } from '../../../classes/realty';


@Component({
  selector: 'app-page-realty',
  templateUrl: './page-realty.component.html',
  styleUrls: ['./page-realty.component.scss']
})
export class PageRealtyComponent implements OnInit {
  @Input() realty: Realty;
  constructor(private route: ActivatedRoute,
              private realtyService: RealtyService) { }

  ngOnInit(): void {
    this.getRealty();
  }

  getRealty(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.realtyService.getRealty(id).subscribe(realty => this.realty = realty);
  }
}
