import { Component, OnInit, Input } from '@angular/core';
import { Realty } from '../../classes/realty';

@Component({
  selector: 'app-realty-places-nearby',
  templateUrl: './realty-places-nearby.component.html',
  styleUrls: ['./realty-places-nearby.component.scss']
})
export class RealtyPlacesNearbyComponent implements OnInit {
  @Input() realty: Realty;
  constructor() { }

  ngOnInit() {
  }

}
