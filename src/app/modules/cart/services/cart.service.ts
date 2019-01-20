import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from './../../products/models/entity/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  getCart(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  addToCart(product: Product): void {
    this.products$.next(this.products$.getValue().concat(product));
  }

}
