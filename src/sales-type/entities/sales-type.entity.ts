import { Field, ID, ObjectType } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Sales } from "../../sales/entities/sales.entity";

@ObjectType()
@Entity("sales_type")
export class SalesType {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => [Sales], { nullable: true })
  @OneToMany(() => Sales, (sales) => sales.salesType)
  sales: Sales[];
}
