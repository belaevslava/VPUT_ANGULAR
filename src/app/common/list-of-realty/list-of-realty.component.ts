import { Component, OnInit, Input } from '@angular/core';
import { Realty } from '../../classes/realty';

@Component({
  selector: 'app-list-of-realty',
  templateUrl: './list-of-realty.component.html',
  styleUrls: ['./list-of-realty.component.scss']
})
export class ListOfRealtyComponent implements OnInit {
  @Input() realty: Realty[];
  constructor() { }

  ngOnInit() {
  }

}
