import { ValueObject } from "src/Shared/value-objects/value-object";
import { ValueValidator } from "src/Shared/value-validator";

export class ReservedAt extends ValueObject<Date> {
    private constructor(date: Date) {
        super(date)
    }

    public static create(): ReservedAt {
        return new ReservedAt(new Date());
    }

    public isBefore(other: ReservedAt): boolean {
        return this.value.getTime() < other.value.getTime();
    }

}