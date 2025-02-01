import { Field, ObjectType } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Decimal128,
} from "typeorm";

@ObjectType()
@Entity("staff")
export class Staff {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

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
}
