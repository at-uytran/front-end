import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  // providers: [ProductService]
})
export class CartComponent implements OnInit {
  product: any;
  list: Array<any>;
  totalQuantity: number;
  totalPrice: number;
  constructor(private route: ActivatedRoute,
                     private router: Router,
                     public productService: ProductService) {
    this.list = [];
  }

ngDoCheck() {
  // this.cartService.autoSave(this.carts);
}

  ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
      this.list = this.productService.getList();
      console.log(this.list);
      this.totalQuantity = this.productService.getTotal();
      this.totalPrice = this.productService.getTotalPrice();
  }
}
