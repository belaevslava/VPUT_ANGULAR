import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../../services/article.service';
import {Article} from '../../../classes/article';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  article: Article;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getContactsArticle();
  }

  getContactsArticle() {
    this.articleService.getArticleByAlias('contacts').subscribe(article => this.article = article);
  }
}
