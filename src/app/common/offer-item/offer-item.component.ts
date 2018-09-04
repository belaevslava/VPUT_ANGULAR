import { Component, OnInit, Input } from '@angular/core';

import { OfferService } from '../../services/offer.service';
import { Offer } from '../../classes/offer';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {
  @Input() offer: Offer;
  constructor( private offerService: OfferService) { }

  ngOnInit() {
      if (typeof this.offer === 'number') {
          const offerId = this.offer;
          this.getOffer(offerId);
      }
  }

  getOffer(id: number): void {
      this.offerService.getOffer(id).subscribe(offer => this.offer = offer);
  }
}
