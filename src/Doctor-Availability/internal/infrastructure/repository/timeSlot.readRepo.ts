import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TimeSlot } from '../models/timeSlot.schema';
import { ViewTimeSlotResponseDto } from 'src/Doctor-Availability/internal/service/Queries/View-Slots/viewTimeSlotResponse.dto';
import { TimeSlotMapper } from './mappers/timeSlot.mapper';

@Injectable()
export class TimeSlotReadRepoistory {

  constructor(
    @InjectModel(TimeSlot.name) private readonly timeSlotModel: Model<TimeSlot>,
  ) {}

  async getSlots() : Promise<ViewTimeSlotResponseDto[]>{
    const slots = await this.timeSlotModel.find().lean()
    return TimeSlotMapper.toResponseList(slots);
  }
  

}
