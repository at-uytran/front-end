import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ISubscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // providers: [ProductService]
})
export class ProductComponent implements OnInit {
  private subscription: ISubscription;

  private products: any;

  constructor(public productService: ProductService, public router: Router) {
      this.productService.getData().subscribe( (data: any) =>{
        this.products = data.products;
      });
  }

  addList = (product: any) =>{
    this.productService.addList(product);
    console.log("setcart");

    console.log(this.productService.getList());
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.propertyName(prop: ts.Declaration)oducts.unsubscribe();
    // this.subscription.unsubscribe();
  }
}
