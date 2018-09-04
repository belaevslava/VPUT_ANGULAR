import { Component, OnInit } from '@angular/core';

import { OfferService } from '../../services/offer.service';
import { Offer } from '../../classes/offer';

@Component({
  selector: 'app-best-offers-of-the-week',
  templateUrl: './best-offers-of-the-week.component.html',
  styleUrls: ['./best-offers-of-the-week.component.scss']
})
export class BestOffersOfTheWeekComponent implements OnInit {
  bestOffers: Offer[];
  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.getBestOffers();
  }

  getBestOffers(): void {
    this.offerService.getBestOffers().subscribe(bestOffers => this.bestOffers = bestOffers);
  }
}
