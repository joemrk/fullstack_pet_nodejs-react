import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { UserInput } from './dto/user.input';
import { User, UserDocument } from './schemas/user.schema';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection,
  ) { }

  async create(user: UserInput): Promise<UserEntity> {    
    const newUser = new this.userModel(user)
    return await newUser.save() as UserEntity
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userModel.find().exec() as UserEntity[]
  }

  async findOne(id: string): Promise<UserEntity>{
    return await this.userModel.findById(id) as UserEntity
  }

  async findByName(username: string): Promise<UserEntity> {
    return  await this.userModel.findOne({username}) as UserEntity
  }

}
