import { Field, ID, ObjectType } from "@nestjs/graphql";
import { PaymentMode } from "src/payment-mode/entities/payment-mode.entity";
import { Vendor } from "src/vendor/entities/vendor.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@ObjectType()
@Entity("expense")
export class Expense {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

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

  @Field(() => Vendor)
  @ManyToOne(() => Vendor, { eager: true })
  @JoinColumn({ name: "vendor_id" })
  vendor: Vendor;

  @Field()
  @Column()
  cheque_no: string;

  @Field()
  @Column()
  payment_mode_id: number;

  @Field(() => PaymentMode)
  @ManyToOne(() => PaymentMode, { eager: true })
  @JoinColumn({ name: "payment_mode_id" })
  paymentMode: PaymentMode;
  

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
