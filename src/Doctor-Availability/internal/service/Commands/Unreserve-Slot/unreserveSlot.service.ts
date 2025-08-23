
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { AppointmentCancelledEvent } from "src/Apointment-Management/shared/events/appointmentCancelled.event";
import { TimeSlotRepository } from "src/Doctor-Availability/internal/infrastructure/repository/timeSlot.repo";


@EventsHandler(AppointmentCancelledEvent)
export class UnreserveSlotService implements IEventHandler<AppointmentCancelledEvent>{

    constructor(private readonly timeSlotRepo:TimeSlotRepository){

    }

    async handle(event: AppointmentCancelledEvent){
        this.timeSlotRepo.unreserveSlot(event.slotId)
    }


}