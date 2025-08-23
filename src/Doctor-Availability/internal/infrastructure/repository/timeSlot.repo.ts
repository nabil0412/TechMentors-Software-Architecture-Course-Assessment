import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { TimeSlot } from '../models/timeSlot.schema';
import { AvailableTimeSlotMapper } from './mappers/availableTimeSlot.mapper';

import { TimeSlotDto } from 'src/Doctor-Availability/shared/dtos/AvailableSlot.dto';

import { AddTimeSlotPersistance } from "./dtos/timeSlotPersistance.dto";
import { SlotIdDto } from 'src/Apointment-Booking/shared/dtos/slotID.dto';


@Injectable()
export class TimeSlotRepository {

  constructor(
    @InjectModel(TimeSlot.name) private readonly timeSlotModel: Model<TimeSlot>,
  ) {}

  async createSlot(slotData: AddTimeSlotPersistance): Promise<void> {
     const slot = new this.timeSlotModel(slotData);
     await slot.save();
  }

  async findAvailableSlots():Promise<TimeSlot[]>{
    const today = new Date()
    const slots = await this.timeSlotModel.find({isReserved :false , doctorName: "Dr. Smith",date:{$gte:today}})
    return slots
  }

  async findAvailableSlotByID(slotId:String):Promise<TimeSlot | null>{
    const slot = await this.timeSlotModel.findById(slotId)
    
    if(!slot){
      return null;
    }

    return slot;

  }

  async reserveSlot(slot:TimeSlot):Promise<void>{
    await this.timeSlotModel.findByIdAndUpdate(slot._id,{isReserved:true})
  }

  async unreserveSlot(slotId : Types.ObjectId){
    await this.timeSlotModel.findByIdAndUpdate(slotId,{isReserved:false})
  }
}
