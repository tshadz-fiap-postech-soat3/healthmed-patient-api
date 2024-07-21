import { Inject, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientRepository } from './patient.repository';

@Injectable()
export class PatientsService {
  constructor(
    @Inject(PatientRepository)
    private readonly patientRepository: PatientRepository,
  ) {}
  async create(createPatientDto: CreatePatientDto) {
    return await this.patientRepository.insert(createPatientDto);
  }

  async findAll() {
    return await this.patientRepository.findAll();
  }

  async remove(id: number) {
    return await this.patientRepository.delete(id);
  }
}
