import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../../classes/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  @Input() properties: Property[];
  @Input() filterById: number;
  @Input() title: string;
  constructor() {}

  ngOnInit() {
      this.filterProperties();
  }
  filterProperties() {
    if (this.filterById) {
        this.properties = this.properties.filter(item => item.property_value && item.property_value.propertyId === this.filterById);
    }
  }
}
