import { Component, OnInit } from '@angular/core';
import {RealtyService} from '../../../services/realty.service';
import {RealtySearchResult} from '../../../classes/realty-search-result';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
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
