import { Component, OnInit } from '@angular/core';

import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'app-cities-tabs',
  templateUrl: './cities-tabs.component.html',
  styleUrls: ['./cities-tabs.component.scss']
})
export class CitiesTabsComponent implements OnInit {
  citiesOfBulgaria: City[];
  allCities: City[];
  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCitiesOfBulgaria();
    this.getAllCities();
  }

    getCitiesOfBulgaria(): void {
      this.cityService.getCitiesOfBulgaria()
          .subscribe(citiesOfBulgaria => {
            this.citiesOfBulgaria = citiesOfBulgaria;
            console.log(citiesOfBulgaria);
          });
  }

  getAllCities(): void {
      this.cityService.getAllCities()
          .subscribe(allCities => {
            this.allCities = allCities;
            console.log(allCities);
          });
  }

}
