import { Categories } from '../../constants/categories';

export interface ProductParams {
    name: string;
    description: string;
    price: number;
    category: Categories;
}

export interface ProductModel extends ProductParams {
    isAvailable: boolean;
}
