import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Length, IsOptional } from 'class-validator';

@InputType()
export class CreateVendorDto {

    @Field()
    @IsString()
    @Length(3, 255)
    name: string;
  
    @Field()
    @IsString()
    @Length(7, 15)
    pan_no: string;
  
    @Field()
    @IsString()
    @Length(3, 255)
    contact_person: string;
  
    @Field()
    @IsString()
    @Length(7, 15)
    contact: string;
  
    @Field()
    @IsEmail()
    @Length(7, 255)
    email: string;
  
    @Field()
    @IsString()
    @Length(7, 255)
    address: string;
  
    @Field()
    @IsString()
    @Length(7, 255)
    image: string;
  
    @Field()
    @IsString()
    @IsOptional()
    @Length(7, 15)
    secondary_contact: string;
    
    @Field()
    @IsString()
    @Length(7, 255)
    bank_details: string;
  
    @Field()
    @IsString()
    @IsOptional()
    @Length(7, 255)
    bank_qr: string;
}
