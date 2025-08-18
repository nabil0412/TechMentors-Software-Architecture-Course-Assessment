import { Inject } from "@nestjs/common";
import { IDoctorAvailabilityAPI } from "src/Doctor-Availability/shared/contracts/doctorAvailability.facade.interface";
import { AvailableTimeSlotsDto } from "src/Doctor-Availability/shared/dtos/availableSlots.dto";

export class DoctorAvailabilityGateway{

    constructor(@Inject (IDoctorAvailabilityAPI) private readonly doctorAvailabilityAPI:IDoctorAvailabilityAPI){
    }

    async getAvailableSlots() : Promise<AvailableTimeSlotsDto[]>{
        return await this.doctorAvailabilityAPI.getAvailableSlots()
    }

}