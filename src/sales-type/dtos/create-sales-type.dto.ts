import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@InputType()
export class CreateSalesTypeDto {
  @Field()
  @IsString()
  @Length(3, 255)
  name: string;
}
