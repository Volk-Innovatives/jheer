import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { SalesService } from "./sales.service";
import { Sales } from "./entities/sales.entity";
import { CreateSalesDto } from "./dtos/create-sales.dto";
import { UpdateSalesDto } from "./dtos/update-sales.dto";

@Resolver(() => Sales)
export class SalesResolver {
  constructor(private readonly salesService: SalesService) {}

  @Query(() => [Sales], { name: "getAllSales" })
  findAll(): Promise<Sales[]> {
    return this.salesService.findAll();
  }

  @Query(() => Sales, { name: "getSales" })
  findOne(@Args("id", { type: () => Int }) id: number): Promise<Sales> {
    return this.salesService.findOne(id);
  }

  @Mutation(() => Sales)
  createSales(
    @Args("createSalesInput") createSalesDto: CreateSalesDto
  ): Promise<Sales> {
    return this.salesService.create(createSalesDto);
  }

  // update Sales by ID
  @Mutation(() => Sales, { name: "updateSales" })
  async updateSales(
    @Args("id", { type: () => Int }) id: number,
    @Args("updateSalesInput") updateSalesDto: UpdateSalesDto
  ): Promise<Sales> {
    return this.salesService.update(id, updateSalesDto);
  }

  @Mutation(() => String, { name: "deleteSales" })
  async deleteSales(
    @Args("id", { type: () => Int }) id: number
  ): Promise<String> {
    return this.salesService.delete(id);
  }
}
