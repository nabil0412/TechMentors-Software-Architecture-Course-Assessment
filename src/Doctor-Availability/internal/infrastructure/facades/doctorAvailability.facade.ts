import { Injectable } from "@nestjs/common";
import { IDoctorAvailabilityAPI } from "src/Doctor-Availability/shared/contracts/doctorAvailability.facade.interface";
import { AvailableTimeSlotsDto } from "src/Doctor-Availability/shared/dtos/availableSlots.dto";
import { TimeSlotRepository } from "../repository/timeSlot.repo";

@Injectable()
export class DoctorAvailabilityFacade implements IDoctorAvailabilityAPI{


    constructor(private readonly timeSlotRepo : TimeSlotRepository){}

    async getAvailableSlots(): Promise<AvailableTimeSlotsDto[]> {
        return await this.timeSlotRepo.findAvailableSlots()
    }



}