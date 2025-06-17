import { Field, ID, ObjectType } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Sales } from "../../sales/entities/sales.entity";
import { Expense } from "src/expense/entities/expense.entity";

@ObjectType()
@Entity("payment_mode")
export class PaymentMode {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => [Sales], { nullable: true })
  @OneToMany(() => Sales, (sales) => sales.paymentMode)
  sales: Sales[];

  @Field(() => [Expense], { nullable: true })
  @OneToMany(() => Expense, (expense) => expense.paymentMode)
  expenses: Expense[];  
}
