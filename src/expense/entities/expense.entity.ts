import { Field, ObjectType } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity("expense")
export class Expense {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  date: string;

  @Field()
  @Column()
  amount: number;

  @Field()
  @Column()
  vendor_id: number;

  @Field()
  @Column()
  cheque_no: string;

  @Field()
  @Column()
  payment_mode_id: number;

  @Field()
  @Column()
  due_date: string;

  @Field()
  @Column()
  status: boolean;
  
  @Field()
  @Column()
  bill_no: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
