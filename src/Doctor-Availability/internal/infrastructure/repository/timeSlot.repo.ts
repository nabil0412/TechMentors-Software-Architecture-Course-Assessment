import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TimeSlot } from '../models/timeSlot.schema';
import {SlotPresistanceDto} from "../../../shared/dtos/addSlot.dto"

@Injectable()
export class TimeSlotRepository {
  
  constructor(
    @InjectModel(TimeSlot.name) private readonly timeSlotModel: Model<TimeSlot>,
  ) {}

  async createSlot(slotData: SlotPresistanceDto): Promise<void> {
     const slot = new this.timeSlotModel(slotData);
     await slot.save();
  }
}
