import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IPatientRepo } from '../../domain/contracts/IPatientRepo.interface';
import { Patient } from '../../domain/entities/patient.entity';
import { PatientModel } from '../models/patient.model';
import { PatientId } from '../../domain/value-objects/appointment/patient/patientId.vo';
import { PatientName } from '../../domain/value-objects/appointment/patient/patientName.vo';

@Injectable()
export class PatientsRepository implements IPatientRepo {
  constructor(
    @InjectModel(PatientModel.name)
    private readonly patientModel: Model<PatientModel>,
  ) {}

  async findPatientById(patientId: String): Promise<Patient | null> {
    const patientDocument = await this.patientModel.findOne()

    if(!patientDocument){
      return null;
    }

    return Patient.create(patientDocument._id as Types.ObjectId,patientDocument.patientName)
  }
  
}
