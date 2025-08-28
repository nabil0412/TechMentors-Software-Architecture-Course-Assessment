import { Types } from "mongoose";
import { Entity } from "src/Shared/entity";
import { PatientId } from "../value-objects/appointment/patient/patientId.vo";
import { PatientName } from "../value-objects/appointment/patient/patientName.vo";

export class Patient extends Entity {
  private _patientId: PatientId;
  private _patientName: PatientName;

  constructor(patientId: PatientId, patientName: PatientName) {
    super()
    this._patientId = patientId;
    this._patientName = patientName;
  }

  public equals(other:Patient){
    return (this.patientId) == (other.patientId)
  }

  public get patientId(){
    return this._patientId
  }

  public get patientName(){
    return this._patientName
  }

  static create(patientId: Types.ObjectId, patientName: string): Patient {
    const _patientId = PatientId.create(patientId)
    const _patientName = PatientName.create(patientName) 
    return new Patient(_patientId, _patientName);
  }
}
