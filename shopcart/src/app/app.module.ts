import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routes';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { DefaultComponent } from './default.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [ProductService, 
    appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
