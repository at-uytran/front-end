import { Component } from '@angular/core';
import { ArticleService } from './article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'article-detail',
  templateUrl: './article_detail.component.html',
  providers: [ArticleService]
})
export class ArticleDetailComponent {
  article: any;
  id: number;
  sub: any;
  constructor(private articleService: ArticleService, private route: ActivatedRoute) {

  }

  private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.articleService.getData().subscribe( (data: any) =>{
      this.article = data.articles[this.id-1];
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
