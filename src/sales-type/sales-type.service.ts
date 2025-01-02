import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalesType } from './entities/sales-type.entity';
import { CreateSalesTypeDto } from './dtos/create-sales-type.dto';

@Injectable()
export class SalesTypeService {
  constructor(
    @InjectRepository(SalesType)
    private readonly salesTypeRepository: Repository<SalesType>,
  ) {}

  findAll(): Promise<SalesType[]> {
    return this.salesTypeRepository.find();
  }

  findOne(id: number): Promise<SalesType> {
    return this.salesTypeRepository.findOne({ where: { id } });
  }

  create(createSalesTypeDto: CreateSalesTypeDto): Promise<SalesType> {
    const salesType = this.salesTypeRepository.create(createSalesTypeDto);
    return this.salesTypeRepository.save(salesType);
  }
}
