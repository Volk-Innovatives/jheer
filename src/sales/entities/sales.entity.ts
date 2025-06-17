import { Field, ObjectType, ID } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { SalesType } from "../../sales-type/entities/sales-type.entity";
import { PaymentMode } from "../../payment-mode/entities/payment-mode.entity";

@ObjectType()
@Entity("sales")
export class Sales {
  @Field(()=> ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  date: Date;

  @Field()
  @Column()
  amount: number;

  @Field()
  @Column()
  remarks: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @CreateDateColumn()
  updatedAt: Date;

  @Field(() => SalesType)
  @ManyToOne(() => SalesType, { eager: true })
  @JoinColumn({ name: "salesTypeId" })
  salesType: SalesType;

  @Field()
  @Column()
  salesTypeId: number;

  @Field(() => PaymentMode)
  @ManyToOne(() => PaymentMode, { eager: true })
  @JoinColumn({ name: "paymentModeId" })
  paymentMode: PaymentMode;

  @Field()
  @Column()
  paymentModeId: number;
  
}
