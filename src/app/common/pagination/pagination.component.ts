import { Component, OnInit, Input } from '@angular/core';
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() lastPage: number;
  @Input() activePage: number;
  countPages: number;
  pages: number[];
  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.activePage = this.activePage || +this.route.snapshot.paramMap.get('page') || 1;
    console.log(this.activePage);
    this.countPages = this.countPages ? this.countPages : 6;
  }

  ngOnInit() {
    this.updatePagination();
  }

  switchPage(page: number) {
    this.activePage = page;
    this.updatePagination();
  }

  switchToPrev() {
    this.activePage--;
    this.updatePagination();
  }

  switchToNext() {
    this.activePage++;
    this.updatePagination();
  }

  updatePagination() {
    const pages = [];
    const countPagesAfterActive = Math.round(this.countPages / 2);
    for (let i = 0; i < (this.countPages + 1); i++) {
        const page = (this.activePage + i) - countPagesAfterActive;
        if (page < 1) { continue; }
        if (page > this.lastPage) { break; }
        pages.push(page);
    }
    this.pages = pages;
    this.updateNavigator();
  }
  updateNavigator() {
    const navigationExtras: NavigationExtras = {
        queryParams: {
          page: this.activePage
        },
        queryParamsHandling: 'merge'
    };
    this.router.navigate([], navigationExtras);
  }
}
