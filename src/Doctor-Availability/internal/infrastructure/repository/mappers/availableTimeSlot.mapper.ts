import { Types } from 'mongoose';
import { TimeSlotDto } from 'src/Doctor-Availability/shared/dtos/AvailableSlot.dto';
import { TimeSlot } from '../../models/timeSlot.schema';

export class AvailableTimeSlotMapper {
  static toResponse(timeSlot: TimeSlot): TimeSlotDto {

    return {
      slotId:(timeSlot._id as Types.ObjectId),
      slotDate: timeSlot.date,
      cost: timeSlot.cost,
      isReserved:timeSlot.isReserved,
      doctorName:timeSlot.doctorName
    };
  }

  static toResponseList(timeSlots: TimeSlot[]): TimeSlotDto[] {
    return timeSlots.map((slot) => this.toResponse(slot));
  }
}
