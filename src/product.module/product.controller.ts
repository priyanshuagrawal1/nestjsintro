import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductServices } from './product.services';

@Controller('products')
export class ProductController {
  constructor(private readonly productServices: ProductServices) {}

  // @Post()
  // getProducts(
  //   @Body('title') prodTitle: String,
  //   @Body('desc') prodDesc: String,
  //   @Body('price') prodPrice: number,
  // ) {
  //   return this.productServices.insertProduct(prodTitle, prodDesc, prodPrice);
  // }

  @Get()
  getSingleProduct() {
    return 'hello world';
  }
}
