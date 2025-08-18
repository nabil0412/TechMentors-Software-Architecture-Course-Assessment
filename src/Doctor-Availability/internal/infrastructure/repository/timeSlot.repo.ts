import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AvailableTimeSlotsDto } from 'src/Doctor-Availability/shared/dtos/availableSlots.dto';
import { TimeSlot } from '../models/timeSlot.schema';
import { AvailableTimeSlotMapper } from './mappers/availableTimeSlot.mapper';

import { AddTimeSlotPersistance } from "./dtos/timeSlotPersistance.dto";

@Injectable()
export class TimeSlotRepository {
  
  constructor(
    @InjectModel(TimeSlot.name) private readonly timeSlotModel: Model<TimeSlot>,
  ) {}

  async createSlot(slotData: AddTimeSlotPersistance): Promise<void> {
     const slot = new this.timeSlotModel(slotData);
     await slot.save();
  }
    
  async findAvailableSlots():Promise<AvailableTimeSlotsDto[]>{
    const today = new Date()
    const slots = await this.timeSlotModel.find({isReserved :false , doctorName: "Dr. Smith",date:{$gte:today}})
    return AvailableTimeSlotMapper.toResponseList(slots)
  }

}
