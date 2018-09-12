import { Component, OnInit, Input } from '@angular/core';
import {Realty} from '../../classes/realty';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  @Input() realty: Realty;
  constructor() { }

  ngOnInit() {
  }

}
