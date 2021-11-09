import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductServices } from './product.services';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductServices],
})
export class ProductModule {}
