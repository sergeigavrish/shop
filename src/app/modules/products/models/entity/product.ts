import { Categories } from '../../constants/categories';
import { ProductModel } from '../interfaces/product.model';

export class Product implements ProductModel {

    name: string;
    description: string;
    price: number;
    category: Categories;
    isAvailable: boolean;

    constructor(props: ProductModel) {
        Object.assign(this, props);
    }

}
