import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { IUser } from './users/interfaces/user.interface';

@Controller()
export class AppController {

  constructor(private authService: AuthService){}

  @Post('auth/login')
  async login(@Body() user:IUser) {    
    
    return this.authService.login(user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  async user(@Request() req){
    return req.user
  }
}