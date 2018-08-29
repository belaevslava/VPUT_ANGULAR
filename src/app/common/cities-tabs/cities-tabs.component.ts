import { Component, OnInit } from '@angular/core';

import { CityService } from './city.service';

@Component({
  selector: 'app-cities-tabs',
  templateUrl: './cities-tabs.component.html',
  styleUrls: ['./cities-tabs.component.scss']
})
export class CitiesTabsComponent implements OnInit {
  citiesOfBulgaria: Object[];
  allCities: Object[];
  countOffersOfCitiesOfBulgaria: number;
  countOffersOfAllCities: number;
  constructor(private cityService: CityService) {
      this.countOffersOfCitiesOfBulgaria = 0;
      this.countOffersOfAllCities = 0;
  }

  ngOnInit() {
    this.getCitiesOfBulgaria();
    this.getAllCities();
  }

  getCitiesOfBulgaria(): void {
      this.cityService.getCitiesOfBulgaria()
          .subscribe(citiesOfBulgaria => {
            this.citiesOfBulgaria = citiesOfBulgaria;

            for (let index in citiesOfBulgaria) {
                this.countOffersOfCitiesOfBulgaria += citiesOfBulgaria[index]['count_offers'];
            }
          });
  }

  getAllCities(): void {
      this.cityService.getAllCities()
          .subscribe(allCities => {
            this.allCities = allCities;

            for(let index in allCities) {
                this.countOffersOfAllCities += allCities[index]['count_offers'];
            }
          });
  }

}
