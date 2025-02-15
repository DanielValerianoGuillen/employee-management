import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from './employee.entity';
import { DocumentType } from './document-type.entity';

@Entity('t_employee_documents')
export class EmployeeDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_path: string;

  @Column({ default: true })
  is_active: boolean;

  @ManyToOne(() => Employee, (employee) => employee.documents, {
    onDelete: 'CASCADE',
  })
  employee: Employee;

  @ManyToOne(
    () => DocumentType,
    (documentType) => documentType.employeeDocuments,
    { onDelete: 'CASCADE' },
  )
  documentType: DocumentType;
}
