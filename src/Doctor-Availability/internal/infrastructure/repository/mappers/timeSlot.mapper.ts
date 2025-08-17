import { TimeSlot } from '../../models/timeSlot.schema';
import { ViewTimeSlotResponseDto } from 'src/Doctor-Availability/internal/service/Queries/View-Slots/viewTimeSlotResponse.dto';

export class TimeSlotMapper {
  static toResponse(timeSlot: TimeSlot): ViewTimeSlotResponseDto {
    return {
      date: timeSlot.date,
      cost: timeSlot.cost,
      isReserved: timeSlot.isReserved,
    };
  }

  static toResponseList(timeSlots: TimeSlot[]): ViewTimeSlotResponseDto[] {
    return timeSlots.map((slot) => this.toResponse(slot));
  }
}
