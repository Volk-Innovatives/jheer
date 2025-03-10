import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Sales } from "./entities/sales.entity";
import { CreateSalesDto } from "./dtos/create-sales.dto";
import { UpdateSalesDto } from "./dtos/update-sales.dto";

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sales)
    private readonly salesRepository: Repository<Sales>
  ) {}

  findAll(): Promise<Sales[]> {
    return this.salesRepository.find();
  }

  async findOne(id: number): Promise<Sales> {
    if (!id) {
      throw new Error("Sales ID is required");
    }
    const result = await this.salesRepository.findOne({ where: { id } });
    if (!result) {
      throw new Error("Sales not found");
    }
    return result;
  }

  create(createSalesDto: CreateSalesDto): Promise<Sales> {
    const sales = this.salesRepository.create(createSalesDto);
    return this.salesRepository.save(sales);
  }
  async update(
    id: number,
    updateSalesDto: UpdateSalesDto
  ): Promise<Sales> {
    const sales = await this.salesRepository.findOne({ where: { id } });
    if (!sales) {
      throw new Error("Sales  not found");
    }
    if (updateSalesDto.salesTypeId) {
      sales.salesTypeId = updateSalesDto.salesTypeId || sales.salesTypeId;
      sales.paymentModeId = updateSalesDto.paymentModeId || sales.paymentModeId;
      sales.amount = updateSalesDto.amount || sales.amount;
      sales.date = updateSalesDto.date || sales.date;
      sales.remarks = updateSalesDto.remarks  || sales.remarks;
    }

    return this.salesRepository.save(sales);
  }

  async delete(id: number): Promise<String> {
    const sales = await this.salesRepository.findOne({ where: { id } });
    if (!sales) {
      throw new Error("Sales not found");
    }
    await this.salesRepository.remove(sales);
    return 'Sales successfully deleted';
  }
}
