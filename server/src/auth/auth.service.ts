import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { IUser } from './../users/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) { }

  async register(user: IUser){
    const newUser = await this.userService.create(user)
    
    return newUser
  }

  async login(loginUser: IUser) {
    
    const user = await this.userService.findByName(loginUser.username)
    
    if (!user || user.user.password !== loginUser.password) throw new UnauthorizedException()

    const payload = { username: user.user.username, sub: user.user.id }
    return { token: this.jwtService.sign(payload) }
  }


}
