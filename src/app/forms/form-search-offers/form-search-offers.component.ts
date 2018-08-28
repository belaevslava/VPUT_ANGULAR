import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-search-offers',
  templateUrl: './form-search-offers.component.html',
  styleUrls: ['./form-search-offers.component.scss']
})
export class FormSearchOffersComponent implements OnInit {
  @Input() layout: string;

  constructor() { }

  ngOnInit() {
  }

}
