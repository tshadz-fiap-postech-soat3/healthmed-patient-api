import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientRepository {
  constructor(private prisma: PrismaService) {}

  async insert(patient: CreatePatientDto): Promise<Patient> {
    return await this.prisma.patient.create({
      data: patient,
    });
  }

  async findAll(): Promise<Patient[]> {
    return await this.prisma.patient.findMany();
  }

  async delete(id: number): Promise<void> {
    this.prisma.patient.delete({
      where: {
        id: id,
      },
    });
  }
}
