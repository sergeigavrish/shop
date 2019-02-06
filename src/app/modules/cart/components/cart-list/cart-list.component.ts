import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CartItem } from './../../models/entity/cart-item';
import { CartService } from './../../services/cart.service';
import { HashTable } from './../../../shared/models/interfaces/hash-table.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems$: Observable<HashTable<CartItem>>;
  cartItemsQuantity$: Observable<number>;
  cartItemsPrice$: Observable<number>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems$ = this.cartService.getCartItems();
    this.cartItemsQuantity$ = this.cartService.getTotalQuanity();
    this.cartItemsPrice$ = this.cartService.getTotalPrice();
  }

  onQuanityChange(cartItem: CartItem) {
    this.cartService.setItemQuanity(cartItem);
  }

  onDelete(cartItem: CartItem) {
    this.cartService.deleteItem(cartItem);
  }

}
