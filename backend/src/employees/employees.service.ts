import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { User } from '../entities/user.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    return this.employeeRepository.find({
      skip,
      take: limit,
      relations: ['user'], // Incluir datos del usuario asociado
    });
  }

  async create(createEmployeeDto: CreateEmployeeDto) {
    const { email, password, first_name, last_name, job_title, salary, document } = createEmployeeDto;

    // Crear el usuario
    const user = this.userRepository.create({
      email,
      password: await bcrypt.hash(password, 10), // Encriptar la contraseña
      first_name,
      last_name,
    });
    await this.userRepository.save(user);

    // Crear el empleado
    const employee = this.employeeRepository.create({
      job_title,
      salary,
      document,
      user,
    });
    return this.employeeRepository.save(employee);
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    await this.employeeRepository.update(id, updateEmployeeDto);
    return this.employeeRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const result = await this.employeeRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('Empleado no encontrado');
    }
    return { message: 'Empleado eliminado correctamente' };
  }
}
