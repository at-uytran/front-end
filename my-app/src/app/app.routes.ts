import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article_detail.component';
import { ArticleComponent } from './article.component';
import { DefaultComponent } from './default.component';
import { EditComponent } from './edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'article', pathMatch: 'full' },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'article', component: ArticleComponent },
  { path: '**', component: DefaultComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);