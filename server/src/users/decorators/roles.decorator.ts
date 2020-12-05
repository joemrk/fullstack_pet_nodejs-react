import { RolesGuard } from '../guards/roles.guard';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

export function Roles(...roles:string[]){
  return applyDecorators(
    SetMetadata('role',roles),
    UseGuards(RolesGuard),
  )
}

// @Get('users')
// @Role('admin')
// findAllUsers() {}