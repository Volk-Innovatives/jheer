import { InputType, Field } from '@nestjs/graphql';
import { IsDecimal, IsEmail, IsNumber, IsString, Length } from 'class-validator';
import { Decimal128 } from 'typeorm';

@InputType()
export class CreateStaffDto {
  
  @Field()
  @IsString()
  @Length(3, 255)
  name: string;

  @Field()
  @IsEmail()
  @Length(3, 255)
  email: string;

  @Field()
  @IsNumber()
  @Length(3, 255)
  contact: number;

  @Field()
  @IsNumber()
  @Length(3, 255)
  secondaryContact: number;

  @Field()
  @IsString()
  @Length(3, 255)
  citizenship: string;
  
  @Field()
  @IsString()
  @Length(3, 255)
  bankAccount: string;

  @Field()
  @IsString()
  @Length(3, 255)
  bankQR: string;

  @Field()
  @IsDecimal()
  @Length(3, 255)
  salary: Decimal128;
}
