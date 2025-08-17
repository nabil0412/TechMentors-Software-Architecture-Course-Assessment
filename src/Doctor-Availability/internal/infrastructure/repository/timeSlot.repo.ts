import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TimeSlot } from '../models/timeSlot.schema';

import {AddTimeSlotPersistance} from "./dtos/timeSlotPersistance.dto"

@Injectable()
export class TimeSlotRepository {
  
  constructor(
    @InjectModel(TimeSlot.name) private readonly timeSlotModel: Model<TimeSlot>,
  ) {}

  async createSlot(slotData: AddTimeSlotPersistance): Promise<void> {
     const slot = new this.timeSlotModel(slotData);
     await slot.save();
  }
}
