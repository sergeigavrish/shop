import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './../../products/models/entity/product';
import { HashTable } from './../../shared/models/interfaces/hash-table.model';
import { CartItem } from './../models/entity/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems$: BehaviorSubject<HashTable<CartItem>> = new BehaviorSubject<HashTable<CartItem>>({});

  constructor() { }

  getCartItems(): Observable<HashTable<CartItem>> {
    return this.cartItems$.asObservable();
  }

  addToCart(product: Product): void {
    const { isAvailable, ...params } = product;
    const oldCartItems = this.cartItems$.getValue();
    const newCartItems = {
      ...oldCartItems,
      [product.name]: !oldCartItems[product.name] ?
        new CartItem(params)
        : {
          ...oldCartItems[product.name],
          quanity: ++oldCartItems[product.name].quanity
        }
    };
    this.cartItems$.next(newCartItems);
  }

  getTotalQuanity() {
    return this.getCartItems()
      .pipe(
        map(items => Object.keys(items).reduce(
          (acc, key) => acc += items[key].price * items[key].quanity, 0
        ))
      );
  }

  getTotalPrice() {
    return this.getCartItems()
      .pipe(
        map(items => Object.keys(items).reduce(
          (acc, key) => acc += items[key].quanity, 0
        ))
      );
  }

  setItemQuanity(cartItem: CartItem): void {
    if (!cartItem.quanity) {
      return this.deleteItem(cartItem);
    }
    this.cartItems$.next({
      ...this.cartItems$.getValue(),
      [cartItem.name]: { ...cartItem }
    });
  }

  deleteItem(cartItem: CartItem): void {
    const { [cartItem.name]: toDelete, ...rest } = this.cartItems$.getValue();
    this.cartItems$.next({ ...rest });
  }

}
