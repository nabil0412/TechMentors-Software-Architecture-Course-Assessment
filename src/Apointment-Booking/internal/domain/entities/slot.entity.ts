import { Types } from "mongoose"
export class SlotEntity{
    slotId: Types.ObjectId
    slotDate:Date

    constructor(slotId_:Types.ObjectId,slotDate_:Date){
        this.slotId = slotId_
        this.slotDate = slotDate_
    }

    static create(slotId_: Types.ObjectId ,slotDate_:Date):SlotEntity{
        
        if(slotDate_.getTime() < new Date().getTime()){
            throw Error("Cannot reserve a slot in the past. Please choose a valid future date.")
        }
        return new SlotEntity(slotId_,slotDate_)
    }

}