import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    private favorites: number[];
    constructor() {
      this.favorites = this.getFavorites();
    }

    toggleItem(id: number) {
      if (this.hasItem(id)) {
        this.removeItem(id);
      } else {
        this.addItem(id);
      }
    }

    hasItem(id: number) {
      return (this.favorites.indexOf(id) > -1);
    }

    removeItem(id: number) {
      const index = this.favorites.indexOf(id);
      if (index > -1) {
          this.favorites.splice(index, 1);
          this.updateFavorites();
      }
    }

    addItem(id: number) {
      this.favorites.push(id);
      this.updateFavorites();
    }

    getFavorites(): number[] {
      const storageFavorites = window.localStorage.getItem('favorites');
      if (typeof storageFavorites === 'string') {
        return storageFavorites
                .split(',')
                .map(function(item) {
                    return parseInt(item, 10);
                });
      } else {
          return [];
      }
    }

    updateFavorites(): void {
      window.localStorage.setItem('favorites', this.favorites.join(','));
    }
}
