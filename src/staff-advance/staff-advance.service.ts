import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StaffAdvance } from "./entities/staff-advance.entity";
import { CreateStaffAdvanceDto } from "./dtos/create-staff-advance.dto";
import { UpdateStaffAdvanceDto } from "./dtos/update-staff-advance.dto";

@Injectable()
export class StaffAdvanceService {
  constructor(
    @InjectRepository(StaffAdvance)
    private readonly staffAdvanceRepository: Repository<StaffAdvance>
  ) {}

  findAll(): Promise<StaffAdvance[]> {
    return this.staffAdvanceRepository.find();
  }

  async findOne(id: string): Promise<StaffAdvance> {
    if (!id) {
      throw new Error("Staff Advance ID is required");
    }
    const result = await this.staffAdvanceRepository.findOne({ where: { id } });
    if (!result) {
      throw new Error("Staff Advance ID not found");
    }
    return result;
  }

  create(createStaffAdvanceDto: CreateStaffAdvanceDto): Promise<StaffAdvance> {
    const staffAdvance = this.staffAdvanceRepository.create(
      createStaffAdvanceDto
    );
    return this.staffAdvanceRepository.save(staffAdvance);
  }
  async update(
    id: string,
    updateStaffAdvanceDto: UpdateStaffAdvanceDto
  ): Promise<StaffAdvance> {
    const staffAdvance = await this.staffAdvanceRepository.findOne({
      where: { id },
    });
    if (!staffAdvance) {
      throw new Error("Staff Advance ID not found");
    }
    if (updateStaffAdvanceDto.date) {
      staffAdvance.date = updateStaffAdvanceDto.date;
      staffAdvance.amount = updateStaffAdvanceDto.amount;
      staffAdvance.staff_id = updateStaffAdvanceDto.staff_id;
      staffAdvance.status = updateStaffAdvanceDto.status;
    }

    return this.staffAdvanceRepository.save(staffAdvance);
  }

  async delete(id: string): Promise<String> {
    const staffAdvance = await this.staffAdvanceRepository.findOne({
      where: { id },
    });
    if (!staffAdvance) {
      throw new Error("Staff Advance ID not found");
    }
    await this.staffAdvanceRepository.remove(staffAdvance);
    return "Staff Advance successfully deleted";
  }
}
