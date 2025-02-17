import { Request } from 'express';
import { User } from '../../entities/user.entity';
import { JwtPayload } from './jwt-payload.interface';

export interface UserRequest extends Request {
  user?: User & JwtPayload; // 
}