import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ProductService,CartService]
})
export class CartComponent implements OnInit {
  products: any;
  carts = [];
  constructor(private route: ActivatedRoute,
                     private router: Router,
                     private cartService: CartService, 
                     private productService: ProductService) {
      this.productService.getData().subscribe( (data: any) =>{
        this.products = data.products;
      });
      console.log(1);
      var id = this.route.snapshot.paramMap.get('id');
      this.cartService.setData(id);
  }

  ngOnInit() {
    console.log(this.carts);
    this.carts = this.cartService.getData();
    console.log(this.carts);
  }

}
