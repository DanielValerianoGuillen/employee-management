import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Employee } from '../entities/employee.entity';
import { SeederService } from './seeder.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Employee]), // Importar las entidades necesarias
    ],
    providers: [SeederService], // Registrar el servicio
})
export class SeederModule {}