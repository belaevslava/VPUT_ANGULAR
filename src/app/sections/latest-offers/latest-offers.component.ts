import { Component, OnInit } from '@angular/core';

import { Offer } from '../../classes/offer';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-latest-offers',
  templateUrl: './latest-offers.component.html',
  styleUrls: ['./latest-offers.component.scss']
})
export class LatestOffersComponent implements OnInit {
  latestOffers: Offer[];
  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.getLatestOffers();
  }

  getLatestOffers(): void {
    this.offerService.getLatestOffers().subscribe(latestOffers => {
      this.latestOffers = latestOffers;
    });
  }

}
