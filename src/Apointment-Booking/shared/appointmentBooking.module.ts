import { Module } from "@nestjs/common";
import { DoctorAvailabilityModule } from "src/Doctor-Availability/doctorAvailability.module";
import { GetAvailableSlotsController } from "../internal/presentation/controllers/getAvailableSlots.controller";
import { IGetAvailableSlots } from "../internal/application/queries/get-available-slots/getAvailableSlots.handler.interface";
import { getAvailableSlotsHandler } from "../internal/infrastructure/query-handlers/getAvailableSlots.handler";
import { DoctorAvailabilityGateway } from "../internal/infrastructure/gateways/doctorAvailability.gateway";


@Module({

    imports:[DoctorAvailabilityModule],
    providers:[{
        provide : IGetAvailableSlots,
        useClass: getAvailableSlotsHandler
    },DoctorAvailabilityGateway],
    controllers:[GetAvailableSlotsController],


})

export class AppointmentBookingModule{}
