import { Component, OnInit, Input } from '@angular/core';
import {ArticleService} from '../../../services/article.service';
import {Article} from '../../../classes/article';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {
  @Input() article: Article;
  constructor(private articleService: ArticleService,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    const alias = this.route.snapshot.paramMap.get('alias');
    this.articleService.getArticleByAlias(alias).subscribe(article => this.article = article);
  }
}
