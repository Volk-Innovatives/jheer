import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Length, IsOptional, IsBoolean, IsDateString} from 'class-validator';

@InputType()
export class CreateExpenseDto {

    @Field()
    @IsString()
    @Length(3, 255)
    name: string;
  
    @Field()
    @IsString()
    @Length(7, 15)
    date: string;
  
    @Field()
    @IsString()
    @Length(3, 255)
    amount: number;
  
    @Field()
    @IsString()
    @Length(7, 15)
    vendor_id: number;
  
    @Field()
    @IsEmail()
    @IsOptional()
    @Length(7, 255)
    cheque_no: string;
  
    @Field()
    @Length(7, 255)
    payment_mode_id: number;
  
    @Field()
    @IsDateString()
    @IsOptional()
    @Length(7, 255)
    due_date: string;
  
    @Field()
    @IsBoolean()
    @Length(1)
    status: boolean;
    
    @Field()
    @IsString()
    @Length(7, 255)
    bill_no: string;
}
