import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PaymentMode } from "./entities/payment-mode.entity";
import { CreatePaymentModeDto } from "./dtos/create-payment-mode.dto";
import { UpdatePaymentModeDto } from "./dtos/update-payment-mode.dto";

@Injectable()
export class PaymentModeService {
  constructor(
    @InjectRepository(PaymentMode)
    private readonly paymentModeRepository: Repository<PaymentMode>
  ) {}

  findAll(): Promise<PaymentMode[]> {
    return this.paymentModeRepository.find();
  }

  async findOne(id: number): Promise<PaymentMode> {
    if (!id) {
      throw new Error("Payment Mode ID is required");
    }
    const result = await this.paymentModeRepository.findOne({ where: { id } });
    if (!result) {
      throw new Error("Payment Mode not found");
    }
    return result;
  }

  create(createPaymentModeDto: CreatePaymentModeDto): Promise<PaymentMode> {
    const paymentMode = this.paymentModeRepository.create(createPaymentModeDto);
    return this.paymentModeRepository.save(paymentMode);
  }
  async update(
    id: number,
    UpdatePaymentModeDto: UpdatePaymentModeDto
  ): Promise<PaymentMode> {
    const paymentMode = await this.paymentModeRepository.findOne({ where: { id } });
    if (!paymentMode) {
      throw new Error("Payment Mode not found");
    }
    if (UpdatePaymentModeDto.name) {
      paymentMode.name = UpdatePaymentModeDto.name;
    }

    return this.paymentModeRepository.save(paymentMode);
  }

  async delete(id: number): Promise<String> {
    const paymentMode = await this.paymentModeRepository.findOne({ where: { id } });
    if (!paymentMode) {
      throw new Error("Payment Mode not found");
    }
    await this.paymentModeRepository.remove(paymentMode);
    return 'Payment Mode successfully deleted';
  }
}
