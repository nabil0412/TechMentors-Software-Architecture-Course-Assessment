import { Types } from "mongoose"

export interface TimeSlotDto{
    slotId : Types.ObjectId,
    slotDate:Date,
    isReserved:Boolean,
    cost : number
}