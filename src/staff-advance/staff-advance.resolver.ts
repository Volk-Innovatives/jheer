import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { StaffAdvanceService } from "./staff-advance.service";
import { StaffAdvance } from "./entities/staff-advance.entity";
import { CreateStaffAdvanceDto } from "./dtos/create-staff-advance.dto";
import { UpdateStaffAdvanceDto } from "./dtos/update-staff-advance.dto";

@Resolver(() => StaffAdvance)
export class StaffAdvanceResolver {
  constructor(private readonly staffAdvanceService: StaffAdvanceService) {}

  @Query(() => [StaffAdvance], { name: "getAllStaffAdvances" })
  findAll(): Promise<StaffAdvance[]> {
    return this.staffAdvanceService.findAll();
  }

  @Query(() => StaffAdvance, { name: "getStaffAdvance" })
  findOne(@Args("id", { type: () => Int }) id: number): Promise<StaffAdvance> {
    return this.staffAdvanceService.findOne(id);
  }

  @Mutation(() => StaffAdvance)
  createStaffAdvance(
    @Args("createStaffAdvanceInput") createStaffAdvanceDto: CreateStaffAdvanceDto
  ): Promise<StaffAdvance> {
    return this.staffAdvanceService.create(createStaffAdvanceDto);
  }

  // update StaffAdvance by ID
  @Mutation(() => StaffAdvance, { name: "updateStaffAdvance" })
  async updateStaffAdvance(
    @Args("id", { type: () => Int }) id: number,
    @Args("updateStaffAdvanceInput") updateStaffAdvanceDto: UpdateStaffAdvanceDto
  ): Promise<StaffAdvance> {
    return this.staffAdvanceService.update(id, updateStaffAdvanceDto);
  }

  @Mutation(() => String, { name: "deleteStaffAdvance" })
  async deleteStaffAdvance(
    @Args("id", { type: () => Int }) id: number
  ): Promise<String> {
    return this.staffAdvanceService.delete(id);
  }
}
