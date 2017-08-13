import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) {
      this.productService.getData().subscribe( (data: any) =>{
        this.products = data.products;
      });
  }
  ngOnInit() {
  }

}
