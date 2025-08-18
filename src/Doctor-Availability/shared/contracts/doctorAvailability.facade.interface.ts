import { AvailableTimeSlotsDto } from '../dtos/availableSlots.dto';

export interface IDoctorAvailabilityAPI {
  getAvailableSlots(): Promise<AvailableTimeSlotsDto[]>;
}

export const IDoctorAvailabilityAPI = Symbol("IDoctorAvailabilityAPI")