import { Categories } from './../../../products/constants/categories';
import { ProductParams } from './../../../products/models/interfaces/product.model';
import { CartItemModel } from './../interfaces/cart-item.model';

export class CartItem implements CartItemModel {
    name: string;
    description: string;
    price: number;
    category: Categories;
    quanity = 1;

    constructor(props: ProductParams) {
        Object.assign(this, props);
    }
}
