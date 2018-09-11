import { Component, OnInit } from '@angular/core';

import {RealtyService} from '../../../services/realty.service';
import {SearchRealty} from '../../../classes/search-realty';

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss']
})
export class PageSearchComponent implements OnInit {
  searchResult: SearchRealty;
  constructor(private realtyService: RealtyService) { }

  ngOnInit() {
    this.searchRealty();
  }

  searchRealty(): void {
    this.realtyService.searchRealty().subscribe(searchResult => {
      this.searchResult = searchResult;
    });
  }
}
