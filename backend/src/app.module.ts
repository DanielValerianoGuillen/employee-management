import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SeederModule } from './database/seeder.module';

@Module({
  imports: [DatabaseModule,SeederModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
