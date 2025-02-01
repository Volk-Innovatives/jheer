import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';
import { VendorService } from './vendor.service';
import { VendorResolver } from './vendor.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor])],
  providers: [VendorService, VendorResolver],
  exports: [VendorService]
})
export class VendorModule {}
