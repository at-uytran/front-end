import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

class Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  constructor( id: number,
                       name: string,
                       price: number,
                       quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

@Injectable()
export class ProductService {
  list: Array<Item>;
  product: any;
  totalQuantity: number;
  totalPrice: number;
  constructor(private http: Http) {
    this.list = [];
    this.product = this.http.get('./assets/products.json').map(res => res.json());
    this.totalQuantity = 0;
    this.totalPrice =0;
  }

  getData() {
     return this.product;//this.http.get('./assets/products.json').map(res => res.json());
  }

  addList(product: any) {
    // for(let i =0; i < this.list.length; i++ ){
      // console.log(this.list[0].id);
      // console.log(product.id);
      // if( this.list[i].id == product.id){
        // console.log('duplicate');
      // }
      // else{
      this.list.push(product);
      this.totalQuantity = this.totalQuantity + product.quantity;
      this.totalPrice = this.totalPrice + product.price;
      // }
    // }
    // for (const key of Object.keys(this.list)) {
    //   console.log(this.list);
    //   if(this.list[key].id== product.id) {
    //     console.log('duplicate product');
    //   }
    // use val
     // }
  }

  getList() {
    return this.list;
  }

  getTotal() {
    return this.totalQuantity;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
  // ngOnDestroy() {
  //   console.log("destroyed service");
  //   console.log(this.list);
  // }
}