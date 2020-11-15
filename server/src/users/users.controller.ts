import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { IUser } from './interfaces/user.interface';
import { Body, Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.usersService.getAll()
  }
  @Get(':id')
  getOne(@Param('id') id :number) {
    return this.usersService.getOne(id)
  }

  @Post('create')
  create(@Body() user: IUser) {
    return this.usersService.create(user)
  }


}
