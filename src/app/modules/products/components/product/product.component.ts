import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './../../models/entity/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() buy: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onBuy(e: MouseEvent): void {
    e.preventDefault();
    console.log('onBuy', this.product);
    this.buy.emit(this.product);
  }

}
