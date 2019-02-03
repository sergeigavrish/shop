# Changelog

## Task1

1. `ProductsModule` was created
  * class `Product` implements `ProductModel`
  * `ProductComponent` displays `Product` info
  * Added a button buy and `onBuy` method to `ProductComponent`
  * `ProductListComponent` displays list of products
  * `ProductsService` passes data to `ProductListComponent`

2. `CartModule` was created
  * `CartService` passes list of products to buy to `CartComponent`
  * `ProductListComponent` adds products to buy to `CartService`
