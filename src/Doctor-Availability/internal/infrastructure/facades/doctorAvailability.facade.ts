import { Injectable } from "@nestjs/common";
import { IDoctorAvailabilityAPI } from "src/Doctor-Availability/shared/contracts/doctorAvailability.facade.interface";
import { TimeSlotRepository } from "../repository/timeSlot.repo";
import { AvailableTimeSlotMapper } from "../repository/mappers/availableTimeSlot.mapper";

import { TimeSlotDto } from "src/Doctor-Availability/shared/dtos/AvailableSlot.dto";
import { Types } from "mongoose";
import { SlotIdDto } from "src/Apointment-Booking/shared/dtos/slotID.dto";

@Injectable()
export class DoctorAvailabilityFacade implements IDoctorAvailabilityAPI{

    constructor(private readonly timeSlotRepo : TimeSlotRepository){}

    async getAvailableSlots(): Promise<TimeSlotDto[]> {
        const slots =  await this.timeSlotRepo.findAvailableSlots()
        return AvailableTimeSlotMapper.toResponseList(slots)
    }

    async reserveSlot(slotId:SlotIdDto): Promise<TimeSlotDto> {

        const slot = await this.timeSlotRepo.findAvailableSlotByID(slotId.slotId)
        if(slot === null){
            throw Error("No such slot with this id exists");
        }

        if(slot.isReserved === true){
            throw Error("This slot is already reserved")
        }
        await this.timeSlotRepo.reserveSlot(slot)

        return {
            slotId:(slot._id as Types.ObjectId),
            slotDate:slot.date,
            isReserved:slot.isReserved,
            cost:slot.cost
        }
    }

}