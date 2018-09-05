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
      this.cityService.getCitiesOfBulgaria()
          .subscribe(citiesOfBulgaria => {
            this.citiesOfBulgaria = citiesOfBulgaria;

            for (let index in citiesOfBulgaria) {
                this.countRealtyOfCitiesOfBulgaria += citiesOfBulgaria[index]['count_realty'];
            }
          });
  }

  getAllCities(): void {
      this.cityService.getAllCities()
          .subscribe(allCities => {
            this.allCities = allCities;

            for(let index in allCities) {
                this.countRealtyOfAllCities += allCities[index]['count_realty'];
            }
          });
  }

}
