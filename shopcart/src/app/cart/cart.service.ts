import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CartService {
carts: Array<any> = [];
  constructor(private http: Http) {
  }

  setData(id: any) {
    this.carts.push(id);
    console.log(this.carts);
  }
  getData() {
    return this.carts;
  }
}