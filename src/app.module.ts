import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product.module/product.module';

@Module({
  imports: [
    // ProductModule,
    // MongooseModule.forRoot(
    //   'mongodb+srv://admin:OfzckjWlTHBN5NIr@cluster0.9comc.mongodb.net/productsmongo?retryWrites=true&w=majority',
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
