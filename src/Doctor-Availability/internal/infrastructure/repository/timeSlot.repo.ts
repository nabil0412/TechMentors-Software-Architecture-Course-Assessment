import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TimeSlot } from '../models/timeSlot.schema';
import { CreateTimeSlotDto, CreatedTimeSlotDto } from "../../../shared/dtos/timeSlot.dto"

@Injectable()
export class TimeSlotRepository {
  constructor(
    @InjectModel(TimeSlot.name) private readonly timeSlotModel: Model<TimeSlot>,
  ) {}

  async addSlot(slot: CreateTimeSlotDto): Promise<CreatedTimeSlotDto> {
    const created = new this.timeSlotModel({
      time: new Date(slot.time), 
      doctorId: slot.doctorId,
      doctorName: slot.doctorName,
      cost: slot.cost,
      isReserved: false,
    });

    const saved = await created.save();

    return {
      id: saved.id.toString(),
      time: saved.time,
      doctorId: saved.doctorId,
      doctorName: saved.doctorName,
      isReserved: saved.isReserved,
      cost: saved.cost,
    };
  }
}
