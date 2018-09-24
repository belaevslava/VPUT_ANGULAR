import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-realty-search-form',
  templateUrl: './realty-search-form.component.html',
  styleUrls: ['./realty-search-form.component.scss']
})
export class RealtySearchFormComponent implements OnInit {
  @Input() layout: string;
  guests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  bathRooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  beds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  model = new RealtySearchModel();
  submitted = false;
  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const queryParams = Object.assign(this.route.snapshot.params, this.model);
    const navigationExtras: NavigationExtras = {
      queryParams: queryParams
    };
    this.router.navigate([], navigationExtras)
    this.submitted = true;
    console.log(this.model);
  }
}

export class RealtySearchModel {
    constructor(
        public filters?: {
            id?: number;
            cityId?: number;
            guests?: number;
            rooms?: number;
            bathRooms?: number;
            beds?: number;
            checkIn?: number;
            checkOut?: number;
            showBooked?: boolean;
            categoryIds?: number[];
            parameterIds?: number[];
            propertyIds?: number[];
        },
        public sort?: string
    ) {
      this.filters = this.filters || {};
      this.filters.guests = this.filters.guests || 1;
      this.filters.rooms = this.filters.rooms || 1;
      this.filters.bathRooms = this.filters.bathRooms || 1;
      this.filters.beds = this.filters.beds || 1;
      this.filters.showBooked = this.filters.showBooked || true;
      this.filters.categoryIds = this.filters.categoryIds || [];
      this.filters.parameterIds = this.filters.parameterIds || [];
      this.filters.propertyIds = this.filters.propertyIds || [];
      this.sort = this.sort || 'asc';
    }
    toggleArrayItem(propertyName, propertyValue) {
        const index = this.filters[propertyName].indexOf(propertyValue);
        if (index > -1) {
            this.filters[propertyName].splice(index, 1);
        } else {
            this.filters[propertyName].push(propertyValue);
        }
    }
    toggleCategoryId(id) {
      this.toggleArrayItem('categoryIds', id);
    }
    toggleParameterId(id) {
      this.toggleArrayItem('parameterIds', id);
    }
    togglePropertyId(id) {
      this.toggleArrayItem('propertyIds', id);
    }
}
