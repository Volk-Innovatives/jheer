import { Field, ObjectType } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Decimal128,
} from "typeorm";

@ObjectType()
@Entity("staff_advance")
export class StaffAdvance {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  date: Date;

  @Field()
  @Column()
  amount: Decimal128;

  @Field()
  @Column()
  staff_id: number;

  @Field()
  @Column()
  status: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
