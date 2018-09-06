import { Component, OnInit } from '@angular/core';

import { City } from '../../classes/city';
import { RealtyService } from '../../services/realty.service';

@Component({
  selector: 'app-cities-tabs',
  templateUrl: './cities-tabs.component.html',
  styleUrls: ['./cities-tabs.component.scss']
})
export class CitiesTabsComponent implements OnInit {
  citiesOfBulgaria: City[];
  citiesOfOtherCountries: City[];
  numberOfRealtyInBulgaria: number;
  numberOfRealtyInOtherCountries: number;
  constructor(private realtyService: RealtyService) {
      this.numberOfRealtyInBulgaria = 0;
      this.numberOfRealtyInOtherCountries = 0;
  }

  ngOnInit() {
    this.getCitiesOfBulgaria();
    this.getCitiesOfOtherCountries();
  }

  getCitiesOfBulgaria(): void {
      const bulgariaAlias = 'bulgaria';
      this.realtyService.getRealtyCitiesByCountryAlias(bulgariaAlias)
          .subscribe(citiesOfBulgaria => {
              this.citiesOfBulgaria = citiesOfBulgaria.sort((a, b) => {
                  if (a.name.ru < b.name.ru)
                      return -1;
                  if (a.name.ru > b.name.ru)
                      return 1;
                  return 0;
              });
              this.citiesOfBulgaria.forEach(city => this.numberOfRealtyInBulgaria += city.numberOfRealty);
          });
  }

  getCitiesOfOtherCountries(): void {
      // this.realtyService.getRealtyCitiesByCountryAlias()
      //     .subscribe(citiesOfOtherCountries => {
      //         this.citiesOfOtherCountries = citiesOfOtherCountries;
      //         this.citiesOfOtherCountries.forEach(city => this.numberOfRealtyInOtherCountries += city.numberOfRealty);
      //     });
  }

}
