import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { EmployeeDocument } from './employee-document.entity';

@Entity('t_employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  job_title: string;

  @Column('decimal', { precision: 10, scale: 2 })
  salary: number;

  @Column()
  document: string;

  @OneToOne(() => User, (user) => user.employee, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @OneToMany(
    () => EmployeeDocument,
    (employeeDocument) => employeeDocument.employee,
  )
  documents: EmployeeDocument[];
}
