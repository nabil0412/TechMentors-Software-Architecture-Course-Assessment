import { Types } from "mongoose";

export class PatientEntity {
  patientId: Types.ObjectId;
  patientName: String;

  constructor(patientId: Types.ObjectId, patientName: String) {
    this.patientId = patientId;
    this.patientName = patientName;
  }

  static create(patientId: Types.ObjectId, patientName: String): PatientEntity {
    return new PatientEntity(patientId, patientName);
  }
}
