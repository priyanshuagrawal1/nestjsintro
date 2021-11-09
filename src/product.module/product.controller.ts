import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductServices } from './product.services';

@Controller('products')
export class ProductController {
  constructor(private readonly productServices: ProductServices) {}

  @Post()
  getProduct(
    @Body('title') prodTitle: String,
    @Body('desc') prodDesc: String,
    @Body('price') prodPrice: number,
  ) {
    return this.productServices.insertProduct(prodTitle, prodDesc, prodPrice);
  }
}
