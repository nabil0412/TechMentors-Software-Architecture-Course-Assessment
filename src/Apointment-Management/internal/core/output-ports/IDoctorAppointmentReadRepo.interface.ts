import { DoctorAppointmentEntity } from "../domain/entities/doctorAppointment.entity";
import { Types } from "mongoose";

export interface IDoctorAppointmentReadRepo{

    getPendingAppointments():Promise<DoctorAppointmentEntity[]>
    getAppointmentById(appointmentId:String):Promise<DoctorAppointmentEntity|null>
}

export const IDoctorAppointmentReadRepo = Symbol("IDoctorAppointmentReadRepo")