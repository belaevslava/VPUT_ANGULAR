import { Component, OnInit } from '@angular/core';

import { FavoriteService } from '../../../services/favorite.service';
import { RealtyService } from '../../../services/realty.service';
import { Realty } from '../../../classes/realty';

@Component({
  selector: 'app-page-favorites',
  templateUrl: './page-favorites.component.html',
  styleUrls: ['./page-favorites.component.scss']
})
export class PageFavoritesComponent implements OnInit {
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
      this.realtyService.getRealtyItems(this.favoritesIds).subscribe(favorites => this.favorites = favorites);
  }
}
