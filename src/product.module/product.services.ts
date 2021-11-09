import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductServices {
  products: Product[] = [];

  insertProduct(title: String, desc: String, price: number) {
    const newProduct = new Product(title, desc, price);
    this.products.push(newProduct);
    console.log(newProduct);

    return this.products;
  }
}
