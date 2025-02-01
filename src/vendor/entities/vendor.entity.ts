import { Field, ObjectType } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from "typeorm";

@ObjectType()
@Entity("vendor")
export class Vendor {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  pan_no: string;

  @Field()
  @Column()
  contact_person: string;

  @Field()
  @Column()
  contact: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  address: string;

  @Field()
  @Column()
  image: string;

  @Field()
  @Column()
  secondary_contact: string;
  
  @Field()
  @Column()
  bank_details: string;

  @Field()
  @Column()
  bank_qr: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @DeleteDateColumn()
  deletedAt: Date;
}
