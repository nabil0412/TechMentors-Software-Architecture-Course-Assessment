import { Controller, Get } from "@nestjs/common";
import { GetPendingAppointmentsService } from "../../core/application/queries/getPendingAppointments.service";


@Controller("/api/management")
export class GetPendingAppointmentsController{

    constructor(private readonly getPendingAppointmentService:GetPendingAppointmentsService){
    }

    @Get()
    async getPendingAppointments(){
        return this.getPendingAppointmentService.getPendingAppointments()
    }




}