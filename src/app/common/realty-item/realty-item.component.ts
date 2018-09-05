import { Component, OnInit, Input } from '@angular/core';

import { RealtyService } from '../../services/realty.service';
import { Realty } from '../../classes/realty';

@Component({
  selector: 'app-realty-item',
  templateUrl: './realty-item.component.html',
  styleUrls: ['./realty-item.component.scss']
})
export class RealtyItemComponent implements OnInit {
  @Input() realtyItem: Realty;
  constructor( private realtyService: RealtyService) { }

  ngOnInit() {
      if (typeof this.realtyItem === 'number') {
          const realtyItemId = this.realtyItem;
          this.getRealtyItem(realtyItemId);
      }
  }

  getRealtyItem(id: number): void {
      this.realtyService.getRealtyItem(id).subscribe(realtyItem => this.realtyItem = realtyItem);
  }
}
