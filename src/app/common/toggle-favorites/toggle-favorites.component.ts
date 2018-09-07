import { Component, OnInit, Input } from '@angular/core';

import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-toggle-favorites',
  templateUrl: './toggle-favorites.component.html',
  styleUrls: ['./toggle-favorites.component.scss']
})
export class ToggleFavoritesComponent implements OnInit {
  @Input() id: number;
  isActive: boolean;
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.isActive = this.favoriteService.hasItem(this.id);
  }

  toggleStatus() {
    this.isActive = !this.isActive;
    this.favoriteService.toggleItem(this.id);
  }

}
