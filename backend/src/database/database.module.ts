import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Employee } from '../entities/employee.entity';
import { EmployeeDocument } from '../entities/employee-document.entity';
import { DocumentType } from '../entities/document-type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',          
      port: 5432,                 
      username: 'postgres',     
      password: 'root',  
      database: 'empleados_db', 
      entities: [User, Employee, EmployeeDocument, DocumentType], 
      synchronize: false,         
      migrations: ['src/migrations/*.ts'], 
      migrationsRun: false,
    }),
  ],
})
export class DatabaseModule {}