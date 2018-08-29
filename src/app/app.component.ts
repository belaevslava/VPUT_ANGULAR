import { Component } from '@angular/core';
import $ from 'jquery';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  usedPlugins: Object;

  onActivate() {
    this.usedPlugins = {
      jquery: $,
      bootstrap: bootstrap
    };
  }
}
