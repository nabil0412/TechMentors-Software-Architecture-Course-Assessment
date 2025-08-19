import {AppointmentEntity } from "../entities/appointment.entity";

export interface IAppointmentRepo{
    addAppointment(appointment:AppointmentEntity)
}

export const IAppointmentRepo =  Symbol("IAppointmentRepo")