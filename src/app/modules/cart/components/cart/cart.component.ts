import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService } from './../../services/cart.service';
import { Product } from '../../../products/models/entity/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$: Observable<Product[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart$ = this.cartService.getCart();
  }

  displayProducts(cart: Product[]) {
    return cart.map((product: Product) => product.name);
  }

}
