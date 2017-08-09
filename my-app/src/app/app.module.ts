import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ArticleDetailComponent } from './article_detail.component';
import { EditComponent } from './edit.component';
import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { routing, appRoutingProviders } from './app.routes';
import { ArticleComponent } from './article.component';
import { DefaultComponent } from './default.component';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailComponent,
    ArticleComponent,
    DefaultComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ArticleService, 
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


