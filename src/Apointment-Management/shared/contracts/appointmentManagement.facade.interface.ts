import { AppointmentDto } from "src/Apointment-Booking/shared/dtos/appointment.dto"

export interface IDoctorAppointmentAPI{

    addAppointment(appointment:AppointmentDto):Promise<void>

}

export const IDoctorAppointmentAPI = Symbol("IDoctorAppointmentAPI")