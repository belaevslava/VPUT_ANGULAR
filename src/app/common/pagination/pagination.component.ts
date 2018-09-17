import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() lastPage: number;
  @Input() countPages: number;
  pages: number[];
  constructor(private router: Router,
              private locationService: Location) {
    this.countPages = this.countPages ? this.countPages : 6;
  }

  ngOnInit() {
    this.switchPage(this.currentPage);
  }

  switchPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  switchToPrev() {
    this.currentPage--;
    this.updatePagination();
  }

  switchToNext() {
    this.currentPage++;
    this.updatePagination();
  }

  updatePagination() {
    const pages = [];
    const countPagesAfterActive = Math.round(this.countPages / 2);
    for (let i = 0; i < (this.countPages + 1); i++) {
        const page = (this.currentPage + i) - countPagesAfterActive;
        if (page < 1) continue;
        if (page > this.lastPage) break;
        pages.push(page);
    }
    this.pages = pages;
    this.updateNavigator();
  }
  updateNavigator() {
    const navigationExtras: NavigationExtras = {
        queryParams: {
            page: this.currentPage
        }
    };
    this.router.navigate([], navigationExtras);
  }
}
