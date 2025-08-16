import { CreateSlotRequestDto,SlotPresistanceDto } from "src/Doctor-Availability/shared/dtos/addSlot.dto";
import { Injectable } from "@nestjs/common";
import { TimeSlotRepository } from "src/Doctor-Availability/internal/infrastructure/repository/timeSlot.repo";

@Injectable()
export class AddSlotService {
  constructor(private readonly slotRepository: TimeSlotRepository) {}

  async createSlot(request: CreateSlotRequestDto): Promise<void> {
    const slotData: SlotPresistanceDto = {
      date: new Date(request.date),
      cost: request.cost,
      doctorName: 'Dr. Smith',
      doctorId: '64f7c8d9b3a1e72f9c4b1234', 
      isReserved: false
    };
    
    await this.slotRepository.createSlot(slotData);
  }
}