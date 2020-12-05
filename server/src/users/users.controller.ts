import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserInput } from './dto/user.input';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    return await this.usersService.findAll()
  }

  @Post()
  async create(@Body() user: UserInput) {
    console.log(user);
    
    return await this.usersService.create(user)
  }


}
