import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SalesType } from "./entities/sales-type.entity";
import { CreateSalesTypeDto } from "./dtos/create-sales-type.dto";
import { UpdateSalesTypeDto } from "./dtos/update-sales-type.dto";

@Injectable()
export class SalesTypeService {
  constructor(
    @InjectRepository(SalesType)
    private readonly salesTypeRepository: Repository<SalesType>
  ) {}

  findAll(): Promise<SalesType[]> {
    return this.salesTypeRepository.find();
  }

  async findOne(id: number): Promise<SalesType> {
    if (!id) {
      throw new Error("Sales Type ID is required");
    }
    const result = await this.salesTypeRepository.findOne({ where: { id } });
    if (!result) {
      throw new Error("Sales Type not found");
    }
    return result;
  }

  create(createSalesTypeDto: CreateSalesTypeDto): Promise<SalesType> {
    const salesType = this.salesTypeRepository.create(createSalesTypeDto);
    return this.salesTypeRepository.save(salesType);
  }
  async update(
    id: number,
    updateSalesTypeDto: UpdateSalesTypeDto
  ): Promise<SalesType> {
    const salesType = await this.salesTypeRepository.findOne({ where: { id } });
    if (!salesType) {
      throw new Error("Sales Type not found");
    }
    if (updateSalesTypeDto.name) {
      salesType.name = updateSalesTypeDto.name;
    }

    return this.salesTypeRepository.save(salesType);
  }

  async delete(id: number): Promise<String> {
    const salesType = await this.salesTypeRepository.findOne({ where: { id } });
    if (!salesType) {
      throw new Error("Sales Type not found");
    }
    await this.salesTypeRepository.remove(salesType);
    return 'Sales type successfully deleted';
  }
}
