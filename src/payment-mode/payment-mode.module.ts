import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMode } from './entities/payment-mode.entity';
import { PaymentModeService } from './payment-mode.service';
import { PaymentModeResolver } from './payment-mode.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMode])],
  providers: [PaymentModeService, PaymentModeResolver],
  exports: [PaymentModeService]
})
export class PaymentModeModule {}
