import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length, IsOptional } from 'class-validator';

@InputType()
export class UpdatePaymentModeDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @Length(3, 255)
  name?: string;
}
