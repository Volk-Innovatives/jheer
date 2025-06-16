import { Field, ObjectType, ID } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

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

  @Field()
  @Column()
  salesTypeId: number;

  @Field()
  @Column()
  paymentModeId: number;
  
}
