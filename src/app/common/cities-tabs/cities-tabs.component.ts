import { Component, OnInit } from '@angular/core';

import { City } from '../../classes/city';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-cities-tabs',
  templateUrl: './cities-tabs.component.html',
  styleUrls: ['./cities-tabs.component.scss']
})
export class CitiesTabsComponent implements OnInit {
  cities: City[];
  numberOfRealtyInBulgaria: number;
  numberOfRealtyInOtherCountries: number;
  constructor(private cityService: CityService) {
      this.numberOfRealtyInBulgaria = 0;
      this.numberOfRealtyInOtherCountries = 0;
  }

  ngOnInit() {
    this.getCitiesWithRealty();
  }

  getCitiesWithRealty(): void {
      this.cityService.getCitiesWithRealty()
          .subscribe(cities => {
              this.cities = this.sortCitiesByName(cities);
              this.calculateRealty();
          });
  }

  sortCitiesByName(cities) {
      return cities.sort((a, b) => {
          if (a.name.ru < b.name.ru) { return -1; }
          if (a.name.ru > b.name.ru) { return 1; }
          return 0;
      });
  }

  calculateRealty() {
      const BulgariaId = 428;
      this.cities.forEach(city => {
          if (city.country.id === BulgariaId) {
              this.numberOfRealtyInBulgaria += city.numberOfRealty;
          } else {
              this.numberOfRealtyInOtherCountries += city.numberOfRealty;
          }
      });
  }

}
