import { InputType, Field } from '@nestjs/graphql';
import { IsDate, IsDateString, IsNumber, IsString, Length } from 'class-validator';

@InputType()
export class CreateSalesDto {
  @Field()
  @IsDate()
  @Length(3, 255)
  date: Date;

  @Field()
  @IsNumber()
  amount: number;

  @Field()
  @IsString()
  @Length(3, 255)
  remarks: string;

  @Field()
  @IsNumber()
  salesTypeId: number;

  @Field()
  @IsNumber()
  paymentModeId: number;
}
