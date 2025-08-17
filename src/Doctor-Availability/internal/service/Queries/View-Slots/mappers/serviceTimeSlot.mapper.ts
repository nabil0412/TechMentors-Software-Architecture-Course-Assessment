import { ViewTimeSlotResponseDto } from 'src/Doctor-Availability/internal/service/Queries/View-Slots/viewTimeSlotResponse.dto';
import { ControllerViewResponseDto } from 'src/Doctor-Availability/internal/presentation/dtos/responses/controllerViewResponse.dto';

export class ServiceTimeSlotMapper {
  static toResponse(timeSlot: ViewTimeSlotResponseDto): ControllerViewResponseDto {
    return {
      date: timeSlot.date,
      cost: timeSlot.cost,
      isReserved: timeSlot.isReserved,
    };
  }

  static toResponseList(timeSlots: ViewTimeSlotResponseDto[]): ControllerViewResponseDto[] {
    return timeSlots.map((slot) => this.toResponse(slot));
  }
}
