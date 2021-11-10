import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductSchema } from './product.model';
import { ProductServices } from './product.services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductServices],
})
export class ProductModule {}
