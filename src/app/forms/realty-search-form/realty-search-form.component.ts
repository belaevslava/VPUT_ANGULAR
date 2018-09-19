import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-realty-search-form',
  templateUrl: './realty-search-form.component.html',
  styleUrls: ['./realty-search-form.component.scss']
})
export class RealtySearchFormComponent implements OnInit {
  @Input() layout: string;
  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('search form was submit');
  }
}
