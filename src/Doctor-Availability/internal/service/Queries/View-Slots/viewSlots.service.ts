import { Injectable } from "@nestjs/common";
import { TimeSlotReadRepoistory } from "src/Doctor-Availability/internal/infrastructure/repository/timeSlot.readRepo";
import { ControllerViewResponseDto } from "src/Doctor-Availability/internal/presentation/dtos/responses/controllerViewResponse.dto";
import { ServiceTimeSlotMapper } from "./mappers/serviceTimeSlot.mapper";

@Injectable()
export class ViewSlotsService{

    constructor(private readonly slotReadRepository: TimeSlotReadRepoistory) {}

    async viewSlots(): Promise<ControllerViewResponseDto[]>{
        const slots = await this.slotReadRepository.getSlots()
        return ServiceTimeSlotMapper.toResponseList(slots)
    }



}