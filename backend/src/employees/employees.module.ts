import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Employee,User])],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
