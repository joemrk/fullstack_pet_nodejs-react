import { RolesGuard } from './../guards/roles.guard';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';

export function Auth(...roles:string[]){
  return applyDecorators(
    SetMetadata('role',roles),
    UseGuards(AuthGuard, RolesGuard),
    // ApiBearerAuth(),
    // ApiUnauthorizedResponse({description: 'Unauthorized'})
  )
}

// @Get('users')
// @Auth('admin')
// findAllUsers() {}