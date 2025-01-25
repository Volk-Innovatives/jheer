import { Module } from '@nestjs/common';
import { StaffAdvanceService } from './staff-advance.service';
import { StaffAdvanceResolver } from './staff-advance.resolver';

@Module({
  providers: [StaffAdvanceService, StaffAdvanceResolver]
})
export class StaffAdvanceModule {}
