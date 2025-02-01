import { InputType, Field } from "@nestjs/graphql";
import { IsDate, IsDecimal, IsNumber, IsString, Length } from "class-validator";

@InputType()
export class UpdateStaffAdvanceDto {
  @Field()
  @IsDate()
  @Length(3, 255)
  date: Date;

  @Field()
  @IsDecimal()
  @Length(3, 255)
  amount: number;

  @Field()
  @IsNumber()
  @Length(3, 255)
  staff_id: number;

  @Field()
  @IsString()
  @Length(3, 255)
  status: string;
}
