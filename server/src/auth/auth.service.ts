import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserInput } from '../users/dto/user.input';
import { TokenResponse } from './entities/token-response.entity';
import { UserResponse } from 'src/users/entities/user-response.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async register(input: UserInput): Promise<TokenResponse> {
    try {
      const user = await this.usersService.findByName(input.username)
      if (user) return { error: ['User exist'] }
      
      const newUser = await this.usersService.create(input)
      
      if (newUser) {
        const payload = { username: newUser.username, sub: newUser.id }
        return {
          token: this.jwtService.sign(payload),
        }
      }

    } catch (error) {
      return { error: ['Cant register', error.message] }
    }
  }

  async login(input: UserInput): Promise<TokenResponse> {
    try {
      const user = await this.usersService.findByName(input.username)
      if (user || user.password === input.password) {
        const payload = { username: user.username, sub: user.id }
        return {
          token: this.jwtService.sign(payload),
        }
      }
    } catch (error) {
      return { error: ['Incorrect login data'] }
    }
  }

  async me(token: string): Promise<UserResponse> {
    try {
      const decodeToken = this.jwtService.decode(token)      
      const user = await this.usersService.findOne(decodeToken.sub)
      return { user }
    } catch (error) {
      return { errors: ['User not exist'] }
    }
  }

}
