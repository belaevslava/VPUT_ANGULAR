import { Component, OnInit, Input } from '@angular/core';
import { Realty } from '../../classes/realty';
import {Property} from '../../classes/property';

@Component({
  selector: 'app-realty-bedrooms',
  templateUrl: './realty-bedrooms.component.html',
  styleUrls: ['./realty-bedrooms.component.scss']
})
export class RealtyBedroomsComponent implements OnInit {
  @Input() realty: Realty;
  bedrooms: Property[];
  constructor() { }

  ngOnInit() {
    this.getBedrooms();
  }

  getBedrooms() {
      this.bedrooms = this.realty.properties.filter(item => item.property_value && item.property_value.propertyId === 135);
      console.log('this.bedrooms', this.bedrooms);
  }

}
