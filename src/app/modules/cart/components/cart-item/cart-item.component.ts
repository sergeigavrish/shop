import { CartItem } from './../../models/entity/cart-item';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Categories } from 'src/app/modules/products/constants/categories';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItem;

  @Output() increase: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() decrease: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() delete: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  onQuanityChange(quanity: number): void {
    if (quanity >= 0) {
      if (quanity > this.item.quanity) {
        return this.increase.emit({ ...this.item, quanity });
      }
      return this.decrease.emit({ ...this.item, quanity });
    }
  }

  onDelete() {
    this.delete.emit(this.item);
  }

  getCategory(category: number): string {
    return Categories[category];
  }


}
