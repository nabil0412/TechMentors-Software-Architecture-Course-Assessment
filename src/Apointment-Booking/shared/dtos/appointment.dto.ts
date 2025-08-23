import { Types } from "mongoose"

export interface AppointmentDto{

    appointmentId: Types.ObjectId,
    slotId: Types.ObjectId,
    slotDate:Date,
    patientName:String,
    reservedAt:Date

}
