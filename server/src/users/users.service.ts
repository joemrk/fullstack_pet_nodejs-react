import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { IUserResponse } from './interfaces/user-response.interface';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private connection: Connection
  ) { }

  async getAll(): Promise<User[]> {
    return await this.userRepo.find()
  }

  async getOne(id: number): Promise<IUserResponse> {
    const user = await this.userRepo.findOne(id)
    return { user }
  }

  async findByName(username: string): Promise<IUserResponse> {

    const user = await this.userRepo.findOne({ where: { username }})
    if (user) return {user}
    return {
      error: 'user not exist'
    }
  }
  async delete(id: string): Promise<void> {
    await this.userRepo.delete(id)
  }

  async create(newUser: IUser): Promise<IUserResponse> {

    let user
    try {
      const result = await this.connection.createQueryBuilder().insert().into(User).values({
        username: newUser.username,
        password: newUser.password,
        roles: newUser.roles
      }).returning('*').execute()
      user = result.raw[0]
    } catch (err) {
      if (err.code === '23505') {
        return {
          error: 'username already exist'
        }
      }
    }
    return { user }
  }

}
