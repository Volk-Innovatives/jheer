import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesType } from './entities/sales-type.entity';
import { SalesTypeService } from './sales-type.service';
import { SalesTypeResolver } from './sales-type.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([SalesType])], // Register the entity here
  providers: [SalesTypeService, SalesTypeResolver],
  exports: [SalesTypeService], // Export the service if needed in other modules
})
export class SalesTypeModule {}
