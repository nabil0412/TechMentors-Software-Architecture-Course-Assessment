import { Inject, Injectable } from "@nestjs/common";
import { IAppointmentRepo } from "src/Apointment-Booking/internal/domain/contracts/IAppointmentRepo.interface";
import { IPatientRepo } from "src/Apointment-Booking/internal/domain/contracts/IPatientRepo.interface";
import { AppointmentEntity } from "src/Apointment-Booking/internal/domain/entities/appointment.entity";
import { addAppointmentCommand } from "./addAppointment.command";
import { ISlotRepo } from "src/Apointment-Booking/internal/domain/contracts/ISlotRepo.interface";

@Injectable()
export class addAppointmentService{

    constructor(
        @Inject(ISlotRepo) private readonly slotRepo: ISlotRepo,
        @Inject(IAppointmentRepo) private readonly appointmentRepo : IAppointmentRepo,
        @Inject(IPatientRepo) private readonly patientRepo : IPatientRepo
    ){
    }

    async addAppointment(command:addAppointmentCommand):Promise<void>{
   
        const patient = await this.patientRepo.findPatientById(command.patientId)
        if(patient === null){
            throw Error("No such patient with this ID exists")
        }

        
        const slot =  await this.slotRepo.reserveSlot({slotId : command.slotId})
        const appointment = AppointmentEntity.create(slot,patient)
    
        await this.appointmentRepo.addAppointment(appointment)
    }

}