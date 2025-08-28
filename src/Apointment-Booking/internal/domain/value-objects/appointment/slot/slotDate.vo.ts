import { ValueObject } from "src/Shared/value-objects/value-object";
import { ValueValidator } from "src/Shared/value-validator";
import { Slot } from "../../../entities/slot.entity";

export class SlotDate extends ValueObject<Date> {
    private constructor(date: Date) {
        super(date)
    }

    public static create(dateStr: string): SlotDate {
        this.validate(dateStr);
        const date = new Date(dateStr)
        return new SlotDate(date);
    }

    public static createFromDate(date:Date):SlotDate{
        return new SlotDate(date)
    }
  
    private static validate(dateStr: string): void {

        if (ValueValidator.isEmpty(dateStr)) {
            throw new Error("Date field is empty")
        }

        if (!ValueValidator.isValidDateISOString(dateStr)) {
            throw new Error("Date is not a valid ISO String");
        }

        const date = new Date(dateStr)
        if(date.getTime() < new Date().getTime()){
            throw Error("Cannot reserve a slot in the past. Please choose a valid future date.")
        }
    }



}