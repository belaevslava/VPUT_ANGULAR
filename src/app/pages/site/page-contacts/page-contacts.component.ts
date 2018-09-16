import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../../services/article.service';
import {Article} from '../../../classes/article';

@Component({
  selector: 'app-page-contacts',
  templateUrl: './page-contacts.component.html',
  styleUrls: ['./page-contacts.component.scss']
})
export class PageContactsComponent implements OnInit {
  article: Article;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getContactsArticle();
  }

  getContactsArticle() {
    this.articleService.getArticleByAlias('contacts').subscribe(article => this.article = article);
  }
}
