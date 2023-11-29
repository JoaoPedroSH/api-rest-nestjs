import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [Prisma],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
