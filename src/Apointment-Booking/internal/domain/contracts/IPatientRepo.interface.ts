import {PatientEntity} from "../entities/patient.entity";

export interface IPatientRepo{
   findPatientById(patientID:String)
}

export const IPatientRepo = Symbol("IPatientRepo")