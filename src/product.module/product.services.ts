import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductServices {
  products: Product[] = [];
  constructor(
    @InjectModel('product') private readonly productModel: Model<Product>,
  ) {}
  async insertProduct(title: String, desc: String, price: number) {
    const newProduct = await this.productModel.create({
      title,
      desc,
      price,
    });

    console.log(newProduct.id);
    console.log('sdscds');

    return { id: newProduct.id as String };
  }

  async getProductById(id: String) {
    console.log(id);

    // let product: Product;
    // try {
    //   const product = await this.findProductById(id);
    // } catch (error) {
    //   throw new NotFoundException('Product not found');
    // }
    // if (!Product) {
    //   throw new NotFoundException('Product not found');
    // } else return product;
  }

  private async findProductById(id: String): Promise<Product> {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw NotFoundException;
    }
    return product;
  }
}
