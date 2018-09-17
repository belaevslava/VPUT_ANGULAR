import { Component, OnInit } from '@angular/core';
import {RealtyService} from '../../../services/realty.service';
import {RealtySearchResult} from '../../../classes/realty-search-result';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss']
})
export class PageSearchComponent implements OnInit {
  realtySearchResult: RealtySearchResult;
  constructor(private route: ActivatedRoute,
              private realtyService: RealtyService) { }

  ngOnInit() {
    this.searchRealty();
  }

  searchRealty(): void {
    this.route.queryParams.subscribe(params => {
        this.realtyService.searchRealty(params).subscribe(realtySearchResult => {
            this.realtySearchResult = realtySearchResult;
        });
    });
  }
}
