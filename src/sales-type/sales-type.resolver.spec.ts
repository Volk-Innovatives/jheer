import { Test, TestingModule } from '@nestjs/testing';
import { SalesTypeResolver } from './sales-type.resolver';

describe('SalesTypeResolver', () => {
  let resolver: SalesTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesTypeResolver],
    }).compile();

    resolver = module.get<SalesTypeResolver>(SalesTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
