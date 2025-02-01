import { Test, TestingModule } from '@nestjs/testing';
import { PaymentModeResolver } from './payment-mode.resolver';

describe('PaymentModeResolver', () => {
  let resolver: PaymentModeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentModeResolver],
    }).compile();

    resolver = module.get<PaymentModeResolver>(PaymentModeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
