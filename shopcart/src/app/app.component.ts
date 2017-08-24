import { Component } from '@angular/core';
import { ProductService } from './product.service'
import { ProductComponent } from './product/product.component'
import { CartComponent } from './cart/cart.component'
import { routing, appRoutingProviders } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  totalQuantity: any;
  title = 'app';
  constructor(public productService: ProductService) {
    this.totalQuantity =0;
  }
  ngDoCheck() {
    this.totalQuantity = this.productService.getTotal();
  }
}
