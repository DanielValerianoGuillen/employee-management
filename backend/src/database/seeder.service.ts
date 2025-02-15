import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Employee } from '../entities/employee.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeederService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
    ) {}

    async seedHRUser() {
        // Verificar si ya existe el usuario de Recursos Humanos
        const existingUser = await this.userRepository.findOne({ where: { email: 'hr@example.com' } });
        if (existingUser) {
            console.log('El usuario de Recursos Humanos ya existe.');
            return;
        }

        // Crear el usuario de Recursos Humanos
        const hrUser = this.userRepository.create({
            first_name: 'HR',
            last_name: 'Manager',
            email: 'hr@example.com',
            password: await bcrypt.hash('password123', 10), // Encriptar la contraseña
        });

        // Guardar el usuario en la base de datos
        const savedUser = await this.userRepository.save(hrUser);

        // Crear el empleado asociado al usuario
        const hrEmployee = this.employeeRepository.create({
            job_title: 'HR Manager',
            salary: 5000.00,
            document: '123456789', // Número de documento de identidad
            user: savedUser, // Asociar el empleado al usuario
        });

        // Guardar el empleado en la base de datos
        await this.employeeRepository.save(hrEmployee);

        console.log('Usuario de Recursos Humanos creado:', savedUser);
    }
}