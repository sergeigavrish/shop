import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CartModule } from './modules/cart/cart.module';
import { ProductsModule } from './modules/products/products.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProductsModule,
    CartModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
