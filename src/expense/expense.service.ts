import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Expense } from "./entities/expense.entity";
import { CreateExpenseDto } from "./dtos/create-expense.dto";
import { UpdateExpenseDto } from "./dtos/update-expense.dto";

@Injectable()
export class ExpenseService {
   
    constructor(
    @InjectRepository(Expense)
    private readonly ExpenseRepository: Repository<Expense>
    ) {}

    findAll(): Promise<Expense[]> {
        return this.ExpenseRepository.find();
    }

    async findOne(id: number): Promise<Expense> {
    if (!id) {
        throw new Error("Expense ID is required");
    }
    const result = await this.ExpenseRepository.findOne({ where: { id } });
    if (!result) {
        throw new Error("Expense ID not found");
    }
    return result;
    }


    create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    const Expense = this.ExpenseRepository.create(createExpenseDto);
    return this.ExpenseRepository.save(Expense);
    }

    async update(id: number, updateExpenseDto: UpdateExpenseDto): Promise<Expense> {
        const staff = await this.ExpenseRepository.findOne({ where: { id } });
        if (!staff) {
            throw new Error("Expense ID not found");
        }
        if (updateExpenseDto.name) {
            staff.name = updateExpenseDto.name;
            staff.date = updateExpenseDto.date;
            staff.amount = updateExpenseDto.amount;
            staff.vendor_id = updateExpenseDto.vendor_id;
            staff.cheque_no = updateExpenseDto.cheque_no;
            staff.payment_mode_id = updateExpenseDto.payment_mode_id;
            staff.due_date = updateExpenseDto.due_date;
            staff.status = updateExpenseDto.status;
            staff.bill_no = updateExpenseDto.bill_no;
        }

        return this.ExpenseRepository.save(staff);
    }

    async delete(id: number): Promise<String> {
        const Expense = await this.ExpenseRepository.findOne({ where: { id } });
        if (!Expense) {
          throw new Error("Expense ID not found");
        }
        await this.ExpenseRepository.remove(Expense);
        return "Expense successfully deleted";
      }

}

