import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';
import { User } from 'src/entities/user.entity';
import { EmployeeDocument } from 'src/entities/employee-document.entity';
import { DocumentType } from 'src/entities/document-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, User, EmployeeDocument,DocumentType])], // Importa las entidades
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
