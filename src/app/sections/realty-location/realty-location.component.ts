import { Component, OnInit, Input } from '@angular/core';
import { Realty } from '../../classes/realty';

@Component({
  selector: 'app-realty-location',
  templateUrl: './realty-location.component.html',
  styleUrls: ['./realty-location.component.scss']
})
export class RealtyLocationComponent implements OnInit {
  @Input() realty: Realty;
  constructor() { }

  ngOnInit() {
  }

}
