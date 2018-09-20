import { Component, OnInit, Input } from '@angular/core';
import { Realty } from '../../classes/realty';

@Component({
  selector: 'app-realty-list',
  templateUrl: './realty-list.component.html',
  styleUrls: ['./realty-list.component.scss']
})
export class RealtyListComponent implements OnInit {
  @Input() realty: Realty[];
  constructor() { }

  ngOnInit() {
  }

}
