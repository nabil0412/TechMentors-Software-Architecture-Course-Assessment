import { Injectable } from '@nestjs/common';
import { DoctorAvailabilityGateway } from '../gateways/doctorAvailability.gateway';
import { Slot } from '../../domain/entities/slot.entity';
import { SlotIdDto } from 'src/Apointment-Booking/shared/dtos/slotID.dto';
import { ISlotRepo } from '../../domain/contracts/ISlotRepo.interface';

@Injectable()
export class SlotsRepository implements ISlotRepo {
  constructor(private readonly doctorAvailabiltyGateway:DoctorAvailabilityGateway) {}

    async reserveSlot(slotID:SlotIdDto):Promise<Slot>{
      const slot =  await this.doctorAvailabiltyGateway.reserveSlot(slotID)
      return Slot.fromPresistence(slot.slotId,slot.slotDate,slot.doctorName as string)
    }
  
}
