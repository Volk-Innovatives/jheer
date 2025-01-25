import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffAdvance } from './entities/staff-advance.entity';
import { StaffAdvanceService } from './staff-advance.service';
import { StaffAdvanceResolver } from './staff-advance.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([StaffAdvance])],
  providers: [StaffAdvanceService, StaffAdvanceResolver],
  exports: [StaffAdvanceService],
})
export class StaffAdvanceModule {}
