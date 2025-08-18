import { AvailableSlotsResponse } from './getAvailableSlots.response';

export interface IGetAvailableSlots {
  handle(): Promise<AvailableSlotsResponse>;
}

export const IGetAvailableSlots = Symbol("IGetAvailableSlots")