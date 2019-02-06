import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

import { Categories } from '../constants/categories';
import { Product } from './../models/entity/product';
import { ProductModel } from '../models/interfaces/product.model';

const productModelMockData1: ProductModel = {
  name: 'name_1',
  description: 'description_1',
  price: 42,
  category: Categories.food,
  isAvailable: true,
};

const productModelMockData2: ProductModel = {
  name: 'name_2',
  description: 'description_2',
  price: 23,
  category: Categories.socks,
  isAvailable: false,
};

const productModelMockData3: ProductModel = {
    name: 'name_3',
    description: 'description_3',
    price: 23,
    category: Categories.games,
    isAvailable: true,
  };

const productsMockData$: Observable<Product[]> = of([
  new Product(productModelMockData1),
  new Product(productModelMockData2),
  new Product(productModelMockData3),
  new Product(productModelMockData1),
  new Product(productModelMockData2),
  new Product(productModelMockData3),
]);

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return productsMockData$;
  }

}
