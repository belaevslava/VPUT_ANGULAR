import { Component, OnInit, Input } from '@angular/core';
import { Realty } from '../../classes/realty';

@Component({
  selector: 'app-realty-rules-of-residence',
  templateUrl: './realty-rules-of-residence.component.html',
  styleUrls: ['./realty-rules-of-residence.component.scss']
})
export class RealtyRulesOfResidenceComponent implements OnInit {
  @Input() realty: Realty;
  constructor() { }

  ngOnInit() {
  }

}
