import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { StaffService } from "./staff.service";
import { Staff } from "./entities/staff.entity";
import { CreateStaffDto } from "./dtos/create-staff.dto";
import { UpdateStaffDto } from "./dtos/update-staff.dto";

@Resolver(() => Staff)
export class StaffResolver {
  constructor(private readonly staffService: StaffService) {}

  @Query(() => [Staff], { name: "getAllStaffs" })
  findAll(): Promise<Staff[]> {
    return this.staffService.findAll();
  }

  @Query(() => Staff, { name: "getStaff" })
  findOne(@Args("id", { type: () => Int }) id: string): Promise<Staff> {
    return this.staffService.findOne(id);
  }

  @Mutation(() => Staff)
  createStaff(
    @Args("createStaffInput") createStaffDto: CreateStaffDto
  ): Promise<Staff> {
    return this.staffService.create(createStaffDto);
  }

  // update Staff by ID
  @Mutation(() => Staff, { name: "updateStaff" })
  async updateStaff(
    @Args("id", { type: () => Int }) id: string,
    @Args("updateStaffInput") updateStaffDto: UpdateStaffDto
  ): Promise<Staff> {
    return this.staffService.update(id, updateStaffDto);
  }

  @Mutation(() => String, { name: "deleteStaff" })
  async deleteStaff(
    @Args("id", { type: () => Int }) id: string
  ): Promise<String> {
    return this.staffService.delete(id);
  }
}
