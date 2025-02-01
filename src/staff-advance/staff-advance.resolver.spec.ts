import { Test, TestingModule } from '@nestjs/testing';
import { StaffAdvanceResolver } from './staff-advance.resolver';

describe('StaffAdvanceResolver', () => {
  let resolver: StaffAdvanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffAdvanceResolver],
    }).compile();

    resolver = module.get<StaffAdvanceResolver>(StaffAdvanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
