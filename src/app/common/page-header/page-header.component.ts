import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: [
      './page-header.component.scss',
      './page-header__hamburger.scss',
  ]
})
export class PageHeaderComponent implements OnInit {
  @Input() theme: 'string';
  constructor() { }

  ngOnInit() {
  }

}
