import { DoctorAppointmentEntity } from "../domain/entities/doctorAppointment.entity";

export interface IDoctorAppointmentRepo{

    addAppointment(appointment:DoctorAppointmentEntity):Promise<void>
    cancelAppointment(appointment:DoctorAppointmentEntity):Promise<void>
    completeAppointment(appointment:DoctorAppointmentEntity):Promise<void>

}

export const IDoctorAppointmentRepo = Symbol("IDoctorAppointmentRepo")