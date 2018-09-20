import { Component, OnInit, Input } from '@angular/core';
import {ArticleService} from '../../../services/article.service';
import {Article} from '../../../classes/article';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  @Input() article: Article;
  alias: string;
  constructor(private articleService: ArticleService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.alias = this.route.snapshot.paramMap.get('alias');
  }
}
