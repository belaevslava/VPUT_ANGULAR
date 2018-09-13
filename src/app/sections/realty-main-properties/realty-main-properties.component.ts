import { Component, OnInit, Input } from '@angular/core';
import { Realty } from '../../classes/realty';

@Component({
  selector: 'app-realty-main-properties',
  templateUrl: './realty-main-properties.component.html',
  styleUrls: ['./realty-main-properties.component.scss']
})
export class RealtyMainPropertiesComponent implements OnInit {
  @Input() realty: Realty;
  hasAirConditioner: boolean;
  constructor() {
    this.hasAirConditioner = false;
  }

  ngOnInit() {
      this.hasAirConditioner = this.realty.parameters.filter(item => item.parameter_value.id === 243).length ? true : false;
  }

}
