import { Component, OnInit } from '@angular/core';

import { FavoriteService } from '../../../services/favorite.service';
import { RealtyService } from '../../../services/realty.service';
import { Realty } from '../../../classes/realty';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  favoritesIds: number[];
  favorites: Realty[];
  constructor(private favoriteService: FavoriteService,
              private realtyService: RealtyService) {
  }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
      this.favoritesIds = this.favoriteService.getFavorites();
      this.realtyService.getRealtyList(this.favoritesIds).subscribe(favorites => this.favorites = favorites);
  }
}
