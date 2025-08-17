import { Injectable } from "@nestjs/common";

import { AddSlotCommand } from "./addSlot.command";

import { TimeSlotRepository } from "src/Doctor-Availability/internal/infrastructure/repository/timeSlot.repo";
import { AddTimeSlotPersistance } from "src/Doctor-Availability/internal/infrastructure/repository/dtos/timeSlotPersistance.dto";

@Injectable()
export class AddSlotService {
  constructor(private readonly slotRepository: TimeSlotRepository) {}

  async createSlot(command: AddSlotCommand): Promise<void> {
    const slotData: AddTimeSlotPersistance = {
      date: command.date,
      cost: command.cost,
      doctorName: 'Dr. Smith',
      doctorId: '64f7c8d9b3a1e72f9c4b1234', 
      isReserved: false
    };
    
    await this.slotRepository.createSlot(slotData);
  }
}