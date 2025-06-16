import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { ExpenseService } from "./expense.service";
import { Expense } from "./entities/expense.entity";
import { CreateExpenseDto } from "./dtos/create-expense.dto";
import { UpdateExpenseDto } from "./dtos/update-expense.dto";

@Resolver(() => Expense)
export class ExpenseResolver {
  constructor(private readonly ExpenseService: ExpenseService) {}

  @Query(() => [Expense], { name: "getAllExpenses" })
  findAll(): Promise<Expense[]> {
    return this.ExpenseService.findAll();
  }

  @Query(() => Expense, { name: "getExpense" })
  findOne(@Args("id", { type: () => Int }) id: string): Promise<Expense> {
    return this.ExpenseService.findOne(id);
  }

  @Mutation(() => Expense)
  createExpense(
    @Args("createExpenseInput") createExpenseDto: CreateExpenseDto
  ): Promise<Expense> {
    return this.ExpenseService.create(createExpenseDto);
  }

  // update Expense by ID
  @Mutation(() => Expense, { name: "updateExpense" })
  async updateExpense(
    @Args("id", { type: () => Int }) id: string,
    @Args("updateExpenseInput") updateExpenseDto: UpdateExpenseDto
  ): Promise<Expense> {
    return this.ExpenseService.update(id, updateExpenseDto);
  }

  @Mutation(() => String, { name: "deleteExpense" })
  async deleteExpense(
    @Args("id", { type: () => Int }) id: string
  ): Promise<String> {
    return this.ExpenseService.delete(id);
  }
}
