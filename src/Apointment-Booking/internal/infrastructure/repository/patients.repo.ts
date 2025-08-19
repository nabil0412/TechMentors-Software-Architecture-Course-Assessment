import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IPatientRepo } from '../../domain/contracts/IPatientRepo.interface';
import { PatientEntity } from '../../domain/entities/patient.entity';
import { Patient } from '../models/patient.model';

@Injectable()
export class PatientsRepository implements IPatientRepo {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<Patient>,
  ) {}

  async findPatientById(patientId: String): Promise<PatientEntity | null> {
    const patientDocument = await this.patientModel.findOne()

    if(!patientDocument){
      return null;
    }

    return {
      patientId: (patientDocument._id as Types.ObjectId),
      patientName: patientDocument.patientName,
    };
  }
  
}
