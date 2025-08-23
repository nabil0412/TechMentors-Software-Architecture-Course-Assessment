import { SlotIdDto } from "src/Apointment-Booking/shared/dtos/slotID.dto";
import { FreeSlotIdDto } from "src/Apointment-Management/shared/dtos/slotID.dto";
import { TimeSlotDto } from "../dtos/AvailableSlot.dto";

export interface IDoctorAvailabilityAPI {
  getAvailableSlots(): Promise<TimeSlotDto[]>;
  reserveSlot(slotID:SlotIdDto): Promise<TimeSlotDto>;
  unreserveSlot(slotID:FreeSlotIdDto):Promise<void>
}

export const IDoctorAvailabilityAPI = Symbol("IDoctorAvailabilityAPI")