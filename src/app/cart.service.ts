import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [] as Product[];
    return this.items;
  }

  getShippingPrices(): Observable<{type:string, price:number}[]> {
    return this.httpClient.get<{type:string, price:number}[]>('/assets/shipping.json');
  }
}
