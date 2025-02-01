import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Vendor } from "./entities/vendor.entity";
import { CreateVendorDto } from "./dtos/create-vendor.dto";
import { UpdateVendorDto } from "./dtos/update-vendor.dto";

@Injectable()
export class VendorService {
   
    constructor(
    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>
    ) {}

    findAll(): Promise<Vendor[]> {
        return this.vendorRepository.find();
    }

    async findOne(id: number): Promise<Vendor> {
    if (!id) {
        throw new Error("Vendor ID is required");
    }
    const result = await this.vendorRepository.findOne({ where: { id } });
    if (!result) {
        throw new Error("Vendor ID not found");
    }
    return result;
    }


    create(createVendorDto: CreateVendorDto): Promise<Vendor> {
    const vendor = this.vendorRepository.create(createVendorDto);
    return this.vendorRepository.save(vendor);
    }

    async update(id: number, updateVendorDto: UpdateVendorDto): Promise<Vendor> {
        const staff = await this.vendorRepository.findOne({ where: { id } });
        if (!staff) {
            throw new Error("Vendor ID not found");
        }
        if (updateVendorDto.name) {
            staff.name = updateVendorDto.name;
            staff.pan_no = updateVendorDto.pan_no;
            staff.contact_person = updateVendorDto.contact_person;
            staff.contact = updateVendorDto.contact;
            staff.email = updateVendorDto.email;
            staff.address = updateVendorDto.address;
            staff.image = updateVendorDto.image;
            staff.secondary_contact = updateVendorDto.secondary_contact;
            staff.bank_details = updateVendorDto.bank_details;
            staff.bank_qr = updateVendorDto.bank_qr;
        }

        return this.vendorRepository.save(staff);
    }

    async delete(id: number): Promise<String> {
        const vendor = await this.vendorRepository.findOne({ where: { id } });
        if (!vendor) {
          throw new Error("Vendor ID not found");
        }
        await this.vendorRepository.remove(vendor);
        return "Vendor successfully deleted";
      }

}

