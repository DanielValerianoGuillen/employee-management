import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EmployeeDocument } from './employee-document.entity';

@Entity('t_document_types')
export class DocumentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => EmployeeDocument, (employeeDocument) => employeeDocument.documentType)
  employeeDocuments: EmployeeDocument[];
}