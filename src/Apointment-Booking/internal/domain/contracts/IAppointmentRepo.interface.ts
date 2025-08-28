import {Appointment } from "../entities/appointment.entity";

export interface IAppointmentRepo{
    addAppointment(appointment:Appointment)
}

export const IAppointmentRepo =  Symbol("IAppointmentRepo")