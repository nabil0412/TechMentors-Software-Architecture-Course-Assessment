import { Injectable } from "@nestjs/common";
import { IDoctorAvailabilityAPI } from "src/Doctor-Availability/shared/contracts/doctorAvailability.facade.interface";
import { AvailableTimeSlotMapper } from "../repository/mappers/availableTimeSlot.mapper";
import { TimeSlotRepository } from "../repository/timeSlot.repo";

import { Types } from "mongoose";
import { SlotIdDto } from "src/Apointment-Booking/shared/dtos/slotID.dto";
import { FreeSlotIdDto } from "src/Apointment-Management/shared/dtos/slotID.dto";
import { TimeSlotDto } from "src/Doctor-Availability/shared/dtos/AvailableSlot.dto";

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
            throw Error("Slot is already booked");
        }

        await this.timeSlotRepo.reserveSlot(slot)

        return {
            slotId:(slot._id as Types.ObjectId),
            doctorName:slot.doctorName,
            slotDate:slot.date,
            isReserved:slot.isReserved,
            cost:slot.cost
        }
    }

    async unreserveSlot(slot:FreeSlotIdDto):Promise<void>{
        this.timeSlotRepo.unreserveSlot(slot.slotId)
    }

}