import { Component, OnInit } from '@angular/core';

import { City } from '../../classes/city';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-cities-tabs',
  templateUrl: './cities-tabs.component.html',
  styleUrls: ['./cities-tabs.component.scss']
})
export class CitiesTabsComponent implements OnInit {
  citiesOfBulgaria: City[];
  allCities: City[];
  countRealtyOfCitiesOfBulgaria: number;
  countRealtyOfAllCities: number;
  constructor(private cityService: CityService) {
      this.countRealtyOfCitiesOfBulgaria = 0;
      this.countRealtyOfAllCities = 0;
  }

  ngOnInit() {
    this.getCitiesOfBulgaria();
    this.getAllCities();
  }

  getCitiesOfBulgaria(): void {
      const bulgariaAlias = 'bulgaria';
      this.cityService.getCitiesByCountryAlias(bulgariaAlias)
          .subscribe(citiesOfBulgaria => {
              this.citiesOfBulgaria = citiesOfBulgaria;
          });
  }

  getAllCities(): void {
      this.cityService.getAllCities()
          .subscribe(allCities => this.allCities = allCities);
  }

}
