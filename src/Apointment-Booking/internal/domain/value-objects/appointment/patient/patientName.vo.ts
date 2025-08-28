import { ValueObject } from "src/Shared/value-objects/value-object";
import { ValueValidator } from "src/Shared/value-validator";

export class PatientName extends ValueObject<string> {
    private constructor(name: string) {
        PatientName.validate(name);
        super(name);
    }

    public static create(name: string): PatientName {
        return new PatientName(name);
    }

    private static validate(name: string): void {
        
        if (!ValueValidator.isString(name)){
             throw new Error("Patient name must be a string");
        }
        
        if (ValueValidator.isEmpty(name)) {
            throw new Error("Patient name cannot be empty");
        }
    }
}
