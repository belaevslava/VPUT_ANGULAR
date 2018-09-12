import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../../classes/property';
import { CategoryProperties } from './category-properties';

@Component({
  selector: 'app-realty-properties',
  templateUrl: './realty-properties.component.html',
  styleUrls: ['./realty-properties.component.scss']
})
export class RealtyPropertiesComponent implements OnInit {
  @Input() properties: Property[];
  propertiesByCategory: CategoryProperties[];
  constructor() {
    this.propertiesByCategory = [];
  }

  ngOnInit() {
    this.getPropertiesByCategory();
  }

  getPropertiesByCategory() {
    const propertiesByCategory = {};
    this.properties.forEach(item => {
      if (item.property_value && item.property_value.propertyId) {
        const categoryId = item.property_value.propertyId;
          propertiesByCategory[categoryId] = (typeof propertiesByCategory[categoryId] === 'object') ? propertiesByCategory[categoryId] : [];
          propertiesByCategory[categoryId].push(item);
      }
    });
    const categories = Object.keys(propertiesByCategory);

    categories.forEach(categoryId => {
        this.propertiesByCategory.push({
            id: categoryId,
            title: propertiesByCategory[categoryId][0].property_value.property.name.ru,
            properties: propertiesByCategory[categoryId]
        });
    });
    console.log('this.propertiesByCategory', this.propertiesByCategory);
  }
}
