
export interface IPatientRepo{
   findPatientById(patientID:String)
}

export const IPatientRepo = Symbol("IPatientRepo")