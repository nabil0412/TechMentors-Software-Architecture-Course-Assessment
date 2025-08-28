import { SlotIdDto } from "src/Apointment-Booking/shared/dtos/slotID.dto"
import { Slot } from "../entities/slot.entity"

export interface ISlotRepo{
    reserveSlot(slotID:SlotIdDto):Promise<Slot>
}

export const ISlotRepo =  Symbol("ISlotRepo")