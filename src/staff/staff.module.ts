import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './entities/staff.entity';
import { StaffService } from './staff.service';
import { StaffResolver } from './staff.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Staff])],
  providers: [StaffService, StaffResolver],
  exports: [StaffService]
})
export class StaffModule {}
