import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { SeederModule } from './database/seeder.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    DatabaseModule,
    SeederModule,
    AuthModule,
    EmployeesModule, // Asegúrate de que ProfileModule esté registrado
  ]
})
export class AppModule {}