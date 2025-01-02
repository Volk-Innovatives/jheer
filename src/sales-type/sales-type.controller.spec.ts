import { Test, TestingModule } from '@nestjs/testing';
import { SalesTypeController } from './sales-type.controller';

describe('SalesTypeController', () => {
  let controller: SalesTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesTypeController],
    }).compile();

    controller = module.get<SalesTypeController>(SalesTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
