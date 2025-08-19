import { SlotIdDto } from "src/Apointment-Booking/shared/dtos/slotID.dto";
import { TimeSlotDto } from "../dtos/AvailableSlot.dto";

export interface IDoctorAvailabilityAPI {
  getAvailableSlots(): Promise<TimeSlotDto[]>;
  reserveSlot(slotID:SlotIdDto): Promise<TimeSlotDto>;
}

export const IDoctorAvailabilityAPI = Symbol("IDoctorAvailabilityAPI")