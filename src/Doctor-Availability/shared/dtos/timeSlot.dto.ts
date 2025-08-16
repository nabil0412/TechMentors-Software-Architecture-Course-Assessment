
export interface CreateTimeSlotDto {
  time: Date;
  doctorId: String;
  doctorName: string;
  cost: number;
}

export interface CreatedTimeSlotDto {
  id: String;            
  time: Date;
  doctorId: String;
  doctorName: string;
  isReserved: boolean;
  cost: number;
}
