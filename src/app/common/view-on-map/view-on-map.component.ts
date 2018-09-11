import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-on-map',
  templateUrl: './view-on-map.component.html',
  styleUrls: ['./view-on-map.component.scss']
})
export class ViewOnMapComponent implements OnInit {
  @Input() longitude: number | string;
  @Input() latitude: number | string;
  constructor() { }

  ngOnInit() {
  }

}
