import { Types } from "mongoose"

export interface TimeSlotDto{
    slotId : Types.ObjectId,
    doctorName: String,
    slotDate:Date,
    isReserved:Boolean,
    cost : number
}