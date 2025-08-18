import { Injectable } from '@nestjs/common';
import { IGetAvailableSlots } from '../../application/queries/get-available-slots/getAvailableSlots.handler.interface';
import { AvailableSlotsResponse } from '../../application/queries/get-available-slots/getAvailableSlots.response';
import { DoctorAvailabilityGateway } from '../gateways/doctorAvailability.gateway';

@Injectable()
export class getAvailableSlotsHandler implements IGetAvailableSlots {
  constructor(
    private readonly doctorAvailabilityGateway: DoctorAvailabilityGateway,
  ) {}

  async handle(): Promise<AvailableSlotsResponse> {
    const queryResult =
      await this.doctorAvailabilityGateway.getAvailableSlots();
    return new AvailableSlotsResponse(
      queryResult
    );
  }
}
