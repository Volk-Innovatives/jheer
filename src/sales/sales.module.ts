import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sales } from './entities/sales.entity';
import { SalesService } from './sales.service';
import { SalesResolver } from './sales.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Sales])],
  providers: [SalesService, SalesResolver],
  exports: [SalesService],
})
export class SalesModule {}
