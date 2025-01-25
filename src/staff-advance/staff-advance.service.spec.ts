import { Test, TestingModule } from '@nestjs/testing';
import { StaffAdvanceService } from './staff-advance.service';

describe('StaffAdvanceService', () => {
  let service: StaffAdvanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffAdvanceService],
    }).compile();

    service = module.get<StaffAdvanceService>(StaffAdvanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
