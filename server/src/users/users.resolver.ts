import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from './decorators/roles.decorator';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';



@Resolver(UserEntity)
export class UsersResolver {

  constructor(
    private readonly usersService: UsersService,
  ) { }

  // @UseGuards(JwtAuthGuard)
  @Roles('root')
  @Query(() => [UserEntity])
  async users() {
    return await this.usersService.findAll()
  }


  @Query(() => UserEntity)
  async findUserByName(
    @Args('name') name: string
  ) {
    return await this.usersService.findByName(name)
  }

 


}