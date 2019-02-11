import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CartListComponent]
})
export class CartModule { }
