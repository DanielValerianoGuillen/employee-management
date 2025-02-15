import { DataSource } from 'typeorm';
import { User } from './src/entities/user.entity';
import { Employee } from './src/entities/employee.entity';
import { EmployeeDocument } from './src/entities/employee-document.entity';
import { DocumentType } from './src/entities/document-type.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',          // Host de la base de datos
  port: 5432,                 // Puerto de PostgreSQL
  username: 'postgres',     // Usuario de la base de datos
  password: 'root',  // Contraseña de la base de datos
  database: 'empleados_db', // Nombre de la base de datos
  entities: [User, Employee, EmployeeDocument, DocumentType], // Entidades
  synchronize: false,         // Desactiva synchronize en producción
  migrations: ['src/migrations/*.ts'], // Ruta de las migraciones
  migrationsRun: false,       // No ejecutar migraciones automáticamente
});
