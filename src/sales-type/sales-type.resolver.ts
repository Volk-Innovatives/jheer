import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SalesTypeService } from './sales-type.service';
import { SalesType } from './entities/sales-type.entity';
import { CreateSalesTypeDto } from './dtos/create-sales-type.dto';

@Resolver(() => SalesType)
export class SalesTypeResolver {
  constructor(private readonly salesTypeService: SalesTypeService) {}

  @Query(() => [SalesType], { name: 'getAllSalesTypes' })
  findAll(): Promise<SalesType[]> {
    return this.salesTypeService.findAll();
  }

  @Query(() => SalesType, { name: 'getSalesType' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<SalesType> {
    return this.salesTypeService.findOne(id);
  }

  @Mutation(() => SalesType)
  createSalesType(
    @Args('createSalesTypeInput') createSalesTypeDto: CreateSalesTypeDto,
  ): Promise<SalesType> {
    return this.salesTypeService.create(createSalesTypeDto);
  }
}
