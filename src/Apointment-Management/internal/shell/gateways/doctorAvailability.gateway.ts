import { Inject, Injectable } from "@nestjs/common"
import { IDoctorAvailabilityAPI } from "src/Doctor-Availability/shared/contracts/doctorAvailability.facade.interface"
import { FreeSlotIdDto } from "../../../shared/dtos/slotID.dto"

@Injectable()
export class DoctorAvailabilityGateway{

    constructor(@Inject (IDoctorAvailabilityAPI) private readonly doctorAvailabilityAPI:IDoctorAvailabilityAPI){
    }

    async unreserveSlot(slotId:FreeSlotIdDto){
        await this.doctorAvailabilityAPI.unreserveSlot(slotId)
    }

}