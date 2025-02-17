import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { SeederModule } from './database/seeder.module';
import { EmployeesModule } from './employees/employees.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    DatabaseModule,
    SeederModule,
    AuthModule,
    EmployeesModule,
    ProfileModule,
  ]
})
export class AppModule {}