import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GuardReturnType } from '../../auth/guards/guardReturn.type';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }
  canActivate(context: ExecutionContext): GuardReturnType {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())
    if (!roles) return true

    const request = context.switchToHttp().getRequest()
    const user = request.user

    return this.matchRole(roles, user.roles)
  }

  private matchRole(guardRoles: string[], requestRoles: string[]): boolean {
    let i = 0, j = 0

    while (i < guardRoles.length && j < requestRoles.length) {

      while (guardRoles[i] < requestRoles[j]) ++i
      while (requestRoles[j] < guardRoles[i])  ++j

      if (guardRoles[i] === requestRoles[j]) return true
    }
    return false
    
  }

}