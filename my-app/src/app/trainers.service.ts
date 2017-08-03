import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TrainersService {
  // trainers: Array<string> = [];

  constructor(private http: Http) {
  }
  getData() {
   return this.http.get('/assets/data.json').map(res => res.json());
  }
}