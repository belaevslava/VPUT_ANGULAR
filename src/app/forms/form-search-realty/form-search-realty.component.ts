import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-search-realty',
  templateUrl: './form-search-realty.component.html',
  styleUrls: ['./form-search-realty.component.scss']
})
export class FormSearchRealtyComponent implements OnInit {
  @Input() layout: string;

  constructor() { }

  ngOnInit() {
  }

}
