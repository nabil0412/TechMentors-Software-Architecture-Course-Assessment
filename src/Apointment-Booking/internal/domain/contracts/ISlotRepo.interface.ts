import { SlotIdDto } from "src/Apointment-Booking/shared/dtos/slotID.dto"
import { SlotEntity } from "../entities/slot.entity"

export interface ISlotRepo{
    reserveSlot(slotID:SlotIdDto):Promise<SlotEntity>
}

export const ISlotRepo =  Symbol("ISlotRepo")