import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { PaymentModeService } from "./payment-mode.service";
import { PaymentMode } from "./entities/payment-mode.entity";
import { CreatePaymentModeDto } from "./dtos/create-payment-mode.dto";

@Resolver(() => PaymentMode)
export class PaymentModeResolver {
  constructor(private readonly paymentModeService: PaymentModeService) {}

  @Query(() => [PaymentMode], { name: "getAllPaymentModes" })
  findAll(): Promise<PaymentMode[]> {
    return this.paymentModeService.findAll();
  }

  @Query(() => PaymentMode, { name: "getPaymentMode" })
  findOne(@Args("id", { type: () => Int }) id: number): Promise<PaymentMode> {
    return this.paymentModeService.findOne(id);
  }

  @Mutation(() => PaymentMode)
  createPaymentMode(
    @Args("createPaymentModeInput") createPaymentModeDto: CreatePaymentModeDto
  ): Promise<PaymentMode> {
    return this.paymentModeService.create(createPaymentModeDto);
  }

  // update PaymentMode by ID
  @Mutation(() => PaymentMode, { name: "updatePaymentMode" })
  async updatePaymentMode(
    @Args("id", { type: () => Int }) id: number,
    @Args("updatePaymentModeInput") updatePaymentModeDto: CreatePaymentModeDto
  ): Promise<PaymentMode> {
    return this.paymentModeService.update(id, updatePaymentModeDto);
  }

  @Mutation(() => String, { name: "deletePaymentMode" })
  async deletePaymentMode(
    @Args("id", { type: () => Int }) id: number
  ): Promise<String> {
    return this.paymentModeService.delete(id);
  }
}
