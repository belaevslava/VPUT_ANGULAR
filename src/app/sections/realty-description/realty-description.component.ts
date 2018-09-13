import { Component, OnInit, Input } from '@angular/core';
import { Realty } from '../../classes/realty';

@Component({
  selector: 'app-realty-description',
  templateUrl: './realty-description.component.html',
  styleUrls: ['./realty-description.component.scss']
})
export class RealtyDescriptionComponent implements OnInit {
  @Input() realty: Realty;
  constructor() { }

  ngOnInit() {
  }

}
