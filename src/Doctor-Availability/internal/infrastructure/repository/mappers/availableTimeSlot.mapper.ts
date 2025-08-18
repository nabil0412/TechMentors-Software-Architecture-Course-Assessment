import { AvailableTimeSlotsDto } from 'src/Doctor-Availability/shared/dtos/availableSlots.dto';
import { TimeSlot } from '../../models/timeSlot.schema';

export class AvailableTimeSlotMapper {
  static toResponse(timeSlot: TimeSlot): AvailableTimeSlotsDto {
    return {
      date: timeSlot.date,
      cost: timeSlot.cost,
    };
  }

  static toResponseList(timeSlots: TimeSlot[]): AvailableTimeSlotsDto[] {
    return timeSlots.map((slot) => this.toResponse(slot));
  }
}
