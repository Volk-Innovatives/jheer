import { Field, ID, ObjectType } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@ObjectType()
@Entity("staff_advance")
export class StaffAdvance {
  @Field(() => ID)
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
  staff_id: number;

  @Field()
  @Column()
  status: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
