import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { SalesTypeService } from "./sales-type.service";
import { SalesType } from "./entities/sales-type.entity";
import { CreateSalesTypeDto } from "./dtos/create-sales-type.dto";

@Resolver(() => SalesType)
export class SalesTypeResolver {
  constructor(private readonly salesTypeService: SalesTypeService) {}

  @Query(() => [SalesType], { name: "getAllSalesTypes" })
  findAll(): Promise<SalesType[]> {
    return this.salesTypeService.findAll();
  }

  @Query(() => SalesType, { name: "getSalesType" })
  findOne(@Args("id", { type: () => Int }) id: number): Promise<SalesType> {
    return this.salesTypeService.findOne(id);
  }

  @Mutation(() => SalesType)
  createSalesType(
    @Args("createSalesTypeInput") createSalesTypeDto: CreateSalesTypeDto
  ): Promise<SalesType> {
    return this.salesTypeService.create(createSalesTypeDto);
  }

  // update SalesType by ID
  @Mutation(() => SalesType, { name: "updateSalesType" })
  async updateSalesType(
    @Args("id", { type: () => Int }) id: number,
    @Args("updateSalesTypeInput") updateSalesTypeDto: CreateSalesTypeDto
  ): Promise<SalesType> {
    return this.salesTypeService.update(id, updateSalesTypeDto);
  }

  @Mutation(() => String, { name: "deleteSalesType" })
  async deleteSalesType(
    @Args("id", { type: () => Int }) id: number
  ): Promise<String> {
    return this.salesTypeService.delete(id);
  }
}
