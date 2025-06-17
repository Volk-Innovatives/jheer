import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Staff } from "src/staff/entities/staff.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
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
  amount: number;ß

  @Field()
  @Column()
  staff_id: number;

  @Field()
  @Column()
  status: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
  
  @Field(() => Staff)
  @ManyToOne(() => Staff, (staff) => staff.id)
  staff: Staff;
}
