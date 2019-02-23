import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from './../../models/entity/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() buy: EventEmitter<{ product: Product, quanity: number }> = new EventEmitter<{ product: Product, quanity: number }>();

  protected quanity: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() { }

  ngOnInit() {
  }

  onQuanityChange(value: number) {
    if (this.quanity.getValue() + value > 1) {
      this.quanity.next(this.quanity.getValue() + value);
    }
  }

  onBuy(): void {
    console.log('onBuy', this.product);
    this.buy.emit({ product: this.product, quanity: this.quanity.getValue() });
  }

}
