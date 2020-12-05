import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GuardReturnType } from './guardReturn.type';


@Injectable()
export class AuthGuard implements CanActivate{
  canActivate(context: ExecutionContext):GuardReturnType{
    const request = context.switchToHttp().getRequest()
    // return validateRequest(request)
    return true
  }
}