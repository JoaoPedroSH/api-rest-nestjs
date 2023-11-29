import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  impor
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
