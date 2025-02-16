import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy'; // Importa la estrategia JWT
import { User } from '../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Importar la entidad User
    PassportModule.register({ defaultStrategy: 'jwt' }), // Registrar Passport con la estrategia JWT
    JwtModule.register({
      secret: 'tu_clave_secreta', // Cambia esto por una clave segura
      signOptions: { expiresIn: '1h' }, // El token expira en 1 hora
    }),
  ],
  providers: [AuthService, JwtStrategy], // Registrar JwtStrategy como proveedor
  controllers: [AuthController],
})
export class AuthModule {}