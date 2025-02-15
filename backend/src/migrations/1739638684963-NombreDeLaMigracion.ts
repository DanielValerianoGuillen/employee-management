import { MigrationInterface, QueryRunner } from "typeorm";

export class NombreDeLaMigracion1739638684963 implements MigrationInterface {
    name = 'NombreDeLaMigracion1739638684963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_employee_documents" DROP CONSTRAINT "FK_ec7117a27076968fffb55bc3cb6"`);
        await queryRunner.query(`ALTER TABLE "t_employee_documents" DROP CONSTRAINT "FK_2e8918dd75e7c408ac161a278e1"`);
        await queryRunner.query(`ALTER TABLE "t_employees" DROP CONSTRAINT "FK_efacb5c3936d42e5ba224fedca5"`);
        await queryRunner.query(`ALTER TABLE "t_employee_documents" ADD CONSTRAINT "FK_ec7117a27076968fffb55bc3cb6" FOREIGN KEY ("employeeId") REFERENCES "t_employees"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "t_employee_documents" ADD CONSTRAINT "FK_2e8918dd75e7c408ac161a278e1" FOREIGN KEY ("documentTypeId") REFERENCES "t_document_types"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "t_employees" ADD CONSTRAINT "FK_efacb5c3936d42e5ba224fedca5" FOREIGN KEY ("userId") REFERENCES "t_users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_employees" DROP CONSTRAINT "FK_efacb5c3936d42e5ba224fedca5"`);
        await queryRunner.query(`ALTER TABLE "t_employee_documents" DROP CONSTRAINT "FK_2e8918dd75e7c408ac161a278e1"`);
        await queryRunner.query(`ALTER TABLE "t_employee_documents" DROP CONSTRAINT "FK_ec7117a27076968fffb55bc3cb6"`);
        await queryRunner.query(`ALTER TABLE "t_employees" ADD CONSTRAINT "FK_efacb5c3936d42e5ba224fedca5" FOREIGN KEY ("userId") REFERENCES "t_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "t_employee_documents" ADD CONSTRAINT "FK_2e8918dd75e7c408ac161a278e1" FOREIGN KEY ("documentTypeId") REFERENCES "t_document_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "t_employee_documents" ADD CONSTRAINT "FK_ec7117a27076968fffb55bc3cb6" FOREIGN KEY ("employeeId") REFERENCES "t_employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
