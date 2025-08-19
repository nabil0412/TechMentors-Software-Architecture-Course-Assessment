import { Inject,Injectable } from "@nestjs/common";
import { SlotIdDto } from "src/Apointment-Booking/shared/dtos/slotID.dto";
import { IDoctorAvailabilityAPI } from "src/Doctor-Availability/shared/contracts/doctorAvailability.facade.interface";
import { TimeSlotDto } from "src/Doctor-Availability/shared/dtos/AvailableSlot.dto";

@Injectable()
export class DoctorAvailabilityGateway{

    constructor(@Inject (IDoctorAvailabilityAPI) private readonly doctorAvailabilityAPI:IDoctorAvailabilityAPI){
    }

    async getAvailableSlots() : Promise<TimeSlotDto[]>{
        return await this.doctorAvailabilityAPI.getAvailableSlots()
    }

    async reserveSlot(slotId: SlotIdDto) : Promise<TimeSlotDto>{
        const slot = await this.doctorAvailabilityAPI.reserveSlot(slotId)
        return slot
    }

}