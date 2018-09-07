import { Component, OnInit } from '@angular/core';

import { City } from '../../classes/city';
import { RealtyService } from '../../services/realty.service';

@Component({
  selector: 'app-cities-tabs',
  templateUrl: './cities-tabs.component.html',
  styleUrls: ['./cities-tabs.component.scss']
})
export class CitiesTabsComponent implements OnInit {
  cities: City[];
  numberOfRealtyInBulgaria: number;
  numberOfRealtyInOtherCountries: number;
  constructor(private realtyService: RealtyService) {
      this.numberOfRealtyInBulgaria = 0;
      this.numberOfRealtyInOtherCountries = 0;
  }

  ngOnInit() {
    this.getRealtyCities();
  }

  getRealtyCities(): void {
      this.realtyService.getRealtyCities()
          .subscribe(cities => {
              this.cities = this.sortCitiesByName(cities);
              this.calculateRealty();
          });
  }

  sortCitiesByName(cities) {
      cities = cities.sort((a, b) => {
          if (a.name.ru < b.name.ru)
              return -1;
          if (a.name.ru > b.name.ru)
              return 1;
          return 0;
      });

      return cities;
  }

  calculateRealty() {
      this.cities.forEach(city => {
          if (city.country.alias === 'bulgaria') {
              this.numberOfRealtyInBulgaria += city.numberOfRealty;
          } else {
              this.numberOfRealtyInOtherCountries += city.numberOfRealty;
          }
      });
  }

}
