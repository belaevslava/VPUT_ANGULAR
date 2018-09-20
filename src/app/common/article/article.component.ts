import { Component, OnInit, Input } from '@angular/core';

import {Article} from '../../classes/article';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() id: number;
  @Input() alias: string;
  @Input() article: Article;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticle();
  }
  getArticle() {
    if (this.id) {
      this.articleService.getArticleById(this.id).subscribe(article => this.article = article);
    } else if (this.alias) {
        this.articleService.getArticleByAlias(this.alias).subscribe(article => this.article = article);
    }
  }
}
