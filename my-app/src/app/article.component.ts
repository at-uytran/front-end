import { Component } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'article-all',
  templateUrl: './article.component.html',
  providers: [ArticleService]
})
export class ArticleComponent {
  articles: any;

  constructor(private articleService: ArticleService) {
      this.articleService.getData().subscribe( (data: any) =>{
        this.articles = data.articles;
      });
  }

  ngOnInit() {
  }
}
