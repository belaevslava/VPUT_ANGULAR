import { Component, OnInit } from '@angular/core';

import { FavoriteService } from '../../../services/favorite.service';

@Component({
  selector: 'app-page-favorites',
  templateUrl: './page-favorites.component.html',
  styleUrls: ['./page-favorites.component.scss']
})
export class PageFavoritesComponent implements OnInit {
  favoritesIds: number[];
  constructor(private favoriteService: FavoriteService) {
      this.favoritesIds = [];
  }

  ngOnInit() {
    this.favoritesIds = this.favoriteService.getFavorites();
  }

}
