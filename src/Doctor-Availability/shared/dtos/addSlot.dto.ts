import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

//controller -> service DTO
export class CreateSlotRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsNumber()
  cost: number;
}

//service-> repo DTO
export interface SlotPresistanceDto {
  date: Date;
  cost: number;
  doctorName: string;
  doctorId: string;
  isReserved: boolean;
}
