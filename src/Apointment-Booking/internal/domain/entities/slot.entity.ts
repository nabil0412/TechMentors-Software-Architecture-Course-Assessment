import { Types } from "mongoose"
import { Entity } from "src/Shared/entity"
import { SlotId } from "../value-objects/appointment/slot/slotId.vo"
import { SlotDate } from "../value-objects/appointment/slot/slotDate.vo"
import { DoctorName } from "../value-objects/appointment/slot/doctorName.vo"

export class Slot extends Entity{
    private _slotId: SlotId
    private _slotDate:SlotDate
    private _doctorName:DoctorName

    constructor(slotId_:SlotId,slotDate_:SlotDate,doctorName_:DoctorName){
        super()
        this._slotId = slotId_
        this._slotDate = slotDate_
        this._doctorName = doctorName_
    }

    public get slotId(): SlotId{
        return this._slotId;
    }

    public get slotDate(): SlotDate {
        return this._slotDate;
    }

    public get doctorName(): DoctorName {
        return this._doctorName;
    }


    public equals(other:Slot){
        return (this._slotId == other.slotId)
    }

    static create(slotId: Types.ObjectId ,slotDate:string,doctorName:string):Slot{
        
        const _slotId = SlotId.create(slotId)
        const _slotDate = SlotDate.create(slotDate)
        const _doctorName = DoctorName.create(doctorName)
        return new Slot(_slotId,_slotDate,_doctorName)
    }

    static fromPresistence(slotId: Types.ObjectId ,slotDate:Date,doctorName:string):Slot{
        const _slotId = SlotId.create(slotId)
        const _slotDate = SlotDate.createFromDate(slotDate)
        const _doctorName = DoctorName.create(doctorName)
        return new Slot(_slotId,_slotDate,_doctorName)
    }

}