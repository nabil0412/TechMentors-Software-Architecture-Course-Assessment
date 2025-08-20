import { Types } from "mongoose"
export class SlotEntity{
    slotId: Types.ObjectId
    slotDate:Date
    doctorName:String

    constructor(slotId_:Types.ObjectId,slotDate_:Date,doctorName_:String){
        this.slotId = slotId_
        this.slotDate = slotDate_
        this.doctorName = doctorName_
    }

    static create(slotId_: Types.ObjectId ,slotDate_:Date,doctorName_:String):SlotEntity{
        
        if(slotDate_.getTime() < new Date().getTime()){
            throw Error("Cannot reserve a slot in the past. Please choose a valid future date.")
        }
        return new SlotEntity(slotId_,slotDate_,doctorName_)
    }

}