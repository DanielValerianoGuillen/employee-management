import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Llama al método canActivate de la clase padre (AuthGuard)
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    // Si hay un error o no hay usuario, lanza una excepción
    if (err || !user) {
      throw err || new UnauthorizedException('No estás autorizado para acceder a este recurso');
    }
    return user;
  }
}