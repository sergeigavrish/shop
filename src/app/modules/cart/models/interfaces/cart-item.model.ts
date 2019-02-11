import { ProductParams } from './../../../products/models/interfaces/product.model';

export interface CartItemModel extends ProductParams {
    quanity: number;
}
