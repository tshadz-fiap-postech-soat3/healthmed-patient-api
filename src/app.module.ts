import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { MigrationsController } from './prisma/migrations.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PatientsModule],
  controllers: [AppController, MigrationsController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
