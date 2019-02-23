import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from './../../products/models/entity/product';
import { HashTable } from './../../shared/models/interfaces/hash-table.model';
import { CartItem } from './../models/entity/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems$: BehaviorSubject<HashTable<CartItem>> = new BehaviorSubject<HashTable<CartItem>>({});
  private totalQuanity$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private totalPrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  private setTotalQuanity(): void {
    const items = this.cartItems$.getValue();
    const total = Object.keys(items)
      .reduce((acc, key) => acc += items[key].quanity, 0);
    this.totalQuanity$.next(total);
  }

  private setTotalPrice(): void {
    const items = this.cartItems$.getValue();
    const total = Object.keys(items)
      .reduce((acc, key) => acc += items[key].price * items[key].quanity, 0);
    this.totalPrice$.next(total);
  }

  getCartItems(): Observable<HashTable<CartItem>> {
    return this.cartItems$.asObservable();
  }

  addToCart(product: Product, quanity = 1): void {
    const { isAvailable, ...params } = product;
    const oldCartItems = this.cartItems$.getValue();
    const newCartItems = {
      ...oldCartItems,
      [product.name]: !oldCartItems[product.name] ?
        new CartItem({ ...params, quanity })
        : {
          ...oldCartItems[product.name],
          quanity: oldCartItems[product.name].quanity + quanity
        }
    };
    this.cartItems$.next(newCartItems);
    this.setTotalQuanity();
    this.setTotalPrice();
  }

  getTotalQuanity(): Observable<number> {
    return this.totalQuanity$.asObservable();
  }

  getTotalPrice(): Observable<number> {
    return this.totalPrice$.asObservable();
  }

  setItemQuanity(cartItem: CartItem): void {
    if (!cartItem.quanity) {
      return this.deleteItem(cartItem);
    }
    this.cartItems$.next({
      ...this.cartItems$.getValue(),
      [cartItem.name]: { ...cartItem }
    });
    this.setTotalQuanity();
    this.setTotalPrice();
  }

  deleteItem(cartItem: CartItem): void {
    const { [cartItem.name]: toDelete, ...rest } = this.cartItems$.getValue();
    this.cartItems$.next({ ...rest });
    this.setTotalQuanity();
    this.setTotalPrice();
  }

  clearCart() {
    this.cartItems$.next({});
    this.setTotalQuanity();
    this.setTotalPrice();
  }

}
