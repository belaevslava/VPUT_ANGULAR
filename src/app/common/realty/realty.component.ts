import { Component, OnInit, Input } from '@angular/core';

import { RealtyService } from '../../services/realty.service';
import { Realty } from '../../classes/realty';

@Component({
  selector: 'app-realty',
  templateUrl: './realty.component.html',
  styleUrls: ['./realty.component.scss']
})
export class RealtyComponent implements OnInit {
  @Input() realty: Realty;
  @Input() hideDetails: boolean;
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
