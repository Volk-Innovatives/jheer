import { Field, ID, ObjectType } from "@nestjs/graphql";
import { StaffAdvance } from "src/staff-advance/entities/staff-advance.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Decimal128,
  OneToMany,
} from "typeorm";

@ObjectType()
@Entity("staff")
export class Staff {
  @Field(() =>ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  contact: number;

  @Field()
  @Column()
  secondaryContact: number;

  @Field()
  @Column()
  citizenship: string;

  @Field()
  @Column()
  bankAccount: string;

  @Field()
  @Column()
  bankQR: string;

  @Field()
  @Column()
  salary: number;
  
  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => [StaffAdvance])
  @OneToMany(() => StaffAdvance, (staffAdvance) => staffAdvance.staff)
  staffAdvance: StaffAdvance[];
}
