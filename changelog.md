# Changelog

## Task 1

1. `ProductsModule` was created
  * class `Product` implements `ProductModel`
  * `ProductComponent` displays `Product` info
  * Added a button buy and `onBuy` method to `ProductComponent`
  * `ProductListComponent` displays list of products
  * `ProductsService` passes data to `ProductListComponent`

2. `CartModule` was created
  * `CartService` passes list of products to buy to `CartComponent`
  * `ProductListComponent` adds products to buy to `CartService`

## Task 2

1. Several feature modules were created:
  * `OrdersModule`
  * `CoreModule`
  * `SharedModule`

2. `CartListComponent` and `СartItemComponent` components were aded to present cart state
  * functionallity to change quantity was implemented
  * `СartItemComponent` is use OnPush strategy

3. The following functionality was added to`CartService`:
  * possibility to calculate cart total price
  * possibility to cart total quantity

4. `AppComponent` now uses `@ViewChild` directive to display app title

5. `CartItemComponent` uses `HighlightDirective` to change component's styles on 'mouseleave' and 'mouseenter' events

6. `ngClass` directive was added to `ProductComponent` to dynamically change class depend on availability of product

## Task 3

1. `CoreModule` was added to `AppModule`

2. `ConvertCaseDirective` was implemented and used in the `CartItemComponent`

3. `CartService` was refactored:
  * addToCart, getTotalQuanity, getTotalPrice were refactored
  * setTotalQuanity, setTotalPrice, clearCart methods were added

4. Several providers were added:
  * `ValueProvider` - `constantsProvider`
  * `FactoryProvider` - `generatorProvider`

5. Several services were implemented:
  * `ConfigOptionsService` with accessors methods to the config object
  * `LocalStorageService` wrapper for `localStorage` API

6. `ContactUsComponent` was implemented and added to `CoreModule`