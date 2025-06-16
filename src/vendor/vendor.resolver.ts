import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { VendorService } from "./vendor.service";
import { Vendor } from "./entities/vendor.entity";
import { CreateVendorDto } from "./dtos/create-vendor.dto";
import { UpdateVendorDto } from "./dtos/update-vendor.dto";

@Resolver(() => Vendor)
export class VendorResolver {
  constructor(private readonly vendorService: VendorService) {}

  @Query(() => [Vendor], { name: "getAllVendors" })
  findAll(): Promise<Vendor[]> {
    return this.vendorService.findAll();
  }

  @Query(() => Vendor, { name: "getVendor" })
  findOne(@Args("id", { type: () => Int }) id: string): Promise<Vendor> {
    return this.vendorService.findOne(id);
  }

  @Mutation(() => Vendor)
  createVendor(
    @Args("createVendorInput") createVendorDto: CreateVendorDto
  ): Promise<Vendor> {
    return this.vendorService.create(createVendorDto);
  }

  // update Vendor by ID
  @Mutation(() => Vendor, { name: "updateVendor" })
  async updateVendor(
    @Args("id", { type: () => Int }) id: string,
    @Args("updateVendorInput") updateVendorDto: UpdateVendorDto
  ): Promise<Vendor> {
    return this.vendorService.update(id, updateVendorDto);
  }

  @Mutation(() => String, { name: "deleteVendor" })
  async deleteVendor(
    @Args("id", { type: () => Int }) id: string
  ): Promise<String> {
    return this.vendorService.delete(id);
  }
}
