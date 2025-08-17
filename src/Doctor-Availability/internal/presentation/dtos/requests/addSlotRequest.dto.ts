import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

//request receievd at controller
export class AddSlotRequest {
  @IsNotEmpty()
  @IsString()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsNumber()
  cost: number;
}