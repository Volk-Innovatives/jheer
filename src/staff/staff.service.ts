import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Staff } from "./entities/staff.entity";
import { CreateStaffDto } from "./dtos/create-staff.dto";
import { UpdateStaffDto } from "./dtos/update-staff.dto";

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>
  ) {}

  findAll(): Promise<Staff[]> {
    return this.staffRepository.find();
  }

  async findOne(id: number): Promise<Staff> {
    if (!id) {
      throw new Error("Staff ID is required");
    }
    const result = await this.staffRepository.findOne({ where: { id } });
    if (!result) {
      throw new Error("Staff ID not found");
    }
    return result;
  }

  create(createStaffDto: CreateStaffDto): Promise<Staff> {
    const staff = this.staffRepository.create(createStaffDto);
    return this.staffRepository.save(staff);
  }
  async update(id: number, updateStaffDto: UpdateStaffDto): Promise<Staff> {
    const staff = await this.staffRepository.findOne({ where: { id } });
    if (!staff) {
      throw new Error("Staff  ID not found");
    }
    if (updateStaffDto.name) {
      staff.name = updateStaffDto.name;
      staff.email = updateStaffDto.email;
      staff.contact = updateStaffDto.contact;
      staff.secondaryContact = updateStaffDto.secondaryContact;
      staff.citizenship = updateStaffDto.citizenship;
      staff.bankAccount = updateStaffDto.bankAccount;
      staff.bankQR = updateStaffDto.bankQR;
      staff.salary = updateStaffDto.salary;
    }

    return this.staffRepository.save(staff);
  }

  async delete(id: number): Promise<String> {
    const staff = await this.staffRepository.findOne({ where: { id } });
    if (!staff) {
      throw new Error("Staff ID not found");
    }
    await this.staffRepository.remove(staff);
    return "Staff successfully deleted";
  }
}
