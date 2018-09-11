import { Component, OnInit, Input } from '@angular/core';

import { RealtyService } from '../../services/realty.service';
import { Realty } from '../../classes/realty';

@Component({
  selector: 'app-realty-item',
  templateUrl: './realty-item.component.html',
  styleUrls: ['./realty-item.component.scss']
})
export class RealtyItemComponent implements OnInit {
  @Input() realty: Realty;
  constructor( private realtyService: RealtyService) { }

  ngOnInit() {
      this.getRealty();
  }

  getRealty(): void {
      if (typeof this.realty === 'number') {
          const id = this.realty;
          this.realtyService.getRealty(id).subscribe(realty => this.realty = realty);
      }
  }
}
