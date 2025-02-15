import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SeederService } from '../database/seeder.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const seederService = app.get(SeederService); // Obtener el servicio
    await seederService.seedHRUser(); // Ejecutar el seeder
    await app.close(); // Cerrar la aplicación
}

bootstrap();