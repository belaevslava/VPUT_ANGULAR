import { Component, OnInit } from '@angular/core';

import { Offer } from '../../classes/offer';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-similar-offers',
  templateUrl: './similar-offers.component.html',
  styleUrls: ['./similar-offers.component.scss']
})
export class SimilarOffersComponent implements OnInit {
  similarOffers: Offer[];
  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.getSimilarOffers();
  }

  getSimilarOffers() {
    this.offerService.getBestOffers().subscribe(similarOffers => {
      this.similarOffers = similarOffers;
      console.log('similarOffers', similarOffers);
    });
  }
}
