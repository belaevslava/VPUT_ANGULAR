import { Component, OnInit, Input } from '@angular/core';

import { OfferItemService } from './offer-item.service';
import { OfferItem } from './offer-item';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {
  @Input() id: number;
  offerItem: OfferItem;
  constructor( private offerItemService: OfferItemService) { }

  ngOnInit() {
      this.getOfferItem(this.id);
  }

  getOfferItem(id: number): void {
      if (id) {
          this.offerItemService.getOfferItem(id).subscribe(result => {
              this.offerItem = result['realties'][0];
              console.log('offers', result['realties'][0]);
          });
      }
  }
}
