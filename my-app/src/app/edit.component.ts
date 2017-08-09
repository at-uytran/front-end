import { Component, Inject } from '@angular/core';
import { ArticleService } from './article.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl,FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'article-edit',
  templateUrl: './edit.component.html',
  providers: [ArticleService]
})

export class EditComponent {
  id: number;
  sub: any;
  article: any;
  articleForm = new FormGroup({
          id: new FormControl(),
          title: new FormControl(),
          content: new FormControl(),
          author: new FormControl()
   });

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder, private articleService: ArticleService, private route: ActivatedRoute) {
       }
  editMember(articleForm: FormGroup) {
  }

  private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.articleService.getData().subscribe( (data: any) =>{
      this.article = data.articles[this.id-1];
    });
  }

onSubmit() {
  console.log('updated');
}

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
