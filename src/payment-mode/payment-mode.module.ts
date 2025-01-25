import { Module } from '@nestjs/common';
import { PaymentModeService } from './payment-mode.service';
import { PaymentModeResolver } from './payment-mode.resolver';

@Module({
  providers: [PaymentModeService, PaymentModeResolver]
})
export class PaymentModeModule {}
