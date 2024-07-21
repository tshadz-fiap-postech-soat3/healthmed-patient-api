import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { PatientRepository } from './patient.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService, PatientRepository, PrismaService],
})
export class PatientsModule {}
