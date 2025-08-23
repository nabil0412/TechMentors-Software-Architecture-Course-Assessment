import { Inject, Injectable } from "@nestjs/common";
import { IDoctorAppointmentReadRepo } from "../../output-ports/IDoctorAppointmentReadRepo.interface";

@Injectable()
export class GetPendingAppointmentsService{

    constructor(@Inject(IDoctorAppointmentReadRepo)  private readonly doctorAppointmentReadRepo:IDoctorAppointmentReadRepo){

    }

    async getPendingAppointments(){
        return await this.doctorAppointmentReadRepo.getPendingAppointments()
    }

}