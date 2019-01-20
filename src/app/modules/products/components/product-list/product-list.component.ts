import { CartService } from './../../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from './../../models/entity/product';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  onBuy(product: Product): void {
    this.cartService.addToCart(product);
  }

}
