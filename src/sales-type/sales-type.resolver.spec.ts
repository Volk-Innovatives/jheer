import { Test, TestingModule } from '@nestjs/testing';
import { SalesTypeResolver } from './sales-type.resolver';
import { SalesTypeService } from './sales-type.service';

describe('SalesTypeResolver', () => {
  let resolver: SalesTypeResolver;
  let service: SalesTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SalesTypeResolver,
        {
          provide: SalesTypeService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<SalesTypeResolver>(SalesTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
